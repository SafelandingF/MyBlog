import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MeshyConfig } from '../config/type';
import type { ZodTypeAny, infer as ZodInfer } from 'zod';
import {
  createTextTo3DPreviewRequestSchema,
  createTextTo3DRefineRequestSchema,
  createTextTo3DResponseSchema,
  textTo3DTaskResponseSchema,
  createImageTo3DRequestSchema,
  createImageTo3DResponseSchema,
  imageTo3DTaskResponseSchema,
  createRemeshRequestSchema,
  createRemeshResponseSchema,
  remeshTaskResponseSchema,
  createRetextureRequestSchema,
  createRetextureResponseSchema,
  retextureTaskResponseSchema,
} from '@my-blog-v2/shared/schemas';

@Injectable()
export class ChatService {
  private meshyConfig: MeshyConfig | undefined;
  constructor(private configService: ConfigService) {
    this.meshyConfig = this.configService.get<MeshyConfig>('meshy');
  }

  private get apiBase() {
    return `${this.meshyConfig?.baseUrl}/openapi/v2`;
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.meshyConfig?.apiKey}`,
      'Content-Type': 'application/json',
    } as Record<string, string>;
  }

  private async doPost<TSchema extends ZodTypeAny>(
    path: string,
    body: unknown,
    responseSchema: TSchema,
  ): Promise<ZodInfer<TSchema>> {
    const url = `${this.apiBase}${path}`;
    const res = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(body),
    });
    const json = (await res.json()) as ZodInfer<TSchema>;
    if (!res.ok) {
      throw new HttpException(
        json ?? { message: 'Meshy API error' },
        res.status,
      );
    }
    const parsed = (responseSchema as ZodTypeAny).safeParse(json);
    if (!parsed.success) {
      throw new HttpException(
        {
          message: 'Invalid response from Meshy API',
          issues: parsed.error.issues,
        },
        502,
      );
    }
    return parsed.data as ZodInfer<TSchema>;
  }

  private async doGet<TSchema extends ZodTypeAny>(
    path: string,
    responseSchema: TSchema,
  ): Promise<ZodInfer<TSchema>> {
    const url = `${this.apiBase}${path}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    });
    const json = (await res.json()) as ZodInfer<TSchema>;
    if (!res.ok) {
      throw new HttpException(
        json ?? { message: 'Meshy API error' },
        res.status,
      );
    }
    const parsed = (responseSchema as ZodTypeAny).safeParse(json);
    if (!parsed.success) {
      throw new HttpException(
        {
          message: 'Invalid response from Meshy API',
          issues: parsed.error.issues,
        },
        502,
      );
    }
    return parsed.data as ZodInfer<TSchema>;
  }

  async createTextTo3D(
    payload:
      | ZodInfer<typeof createTextTo3DPreviewRequestSchema>
      | ZodInfer<typeof createTextTo3DRefineRequestSchema>,
  ) {
    return await this.doPost(
      '/text-to-3d',
      payload,
      createTextTo3DResponseSchema,
    );
  }

  async getTextTo3DTask(taskId: string) {
    return await this.doGet(
      `/text-to-3d/${taskId}`,
      textTo3DTaskResponseSchema,
    );
  }

  async createImageTo3D(
    payload: ZodInfer<typeof createImageTo3DRequestSchema>,
  ) {
    return await this.doPost(
      '/image-to-3d',
      payload,
      createImageTo3DResponseSchema,
    );
  }

  async getImageTo3DTask(taskId: string) {
    return await this.doGet(
      `/image-to-3d/${taskId}`,
      imageTo3DTaskResponseSchema,
    );
  }

  async createRemesh(payload: ZodInfer<typeof createRemeshRequestSchema>) {
    return await this.doPost('/remesh', payload, createRemeshResponseSchema);
  }

  async getRemeshTask(taskId: string) {
    return await this.doGet(`/remesh/${taskId}`, remeshTaskResponseSchema);
  }

  async createRetexture(
    payload: ZodInfer<typeof createRetextureRequestSchema>,
  ) {
    return await this.doPost(
      '/retexture',
      payload,
      createRetextureResponseSchema,
    );
  }

  async getRetextureTask(taskId: string) {
    return await this.doGet(
      `/retexture/${taskId}`,
      retextureTaskResponseSchema,
    );
  }
}
