import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MeshyConfig } from 'src/config/type';

@Injectable()
export class ChatService {
  private meshyConfig: MeshyConfig | undefined;
  constructor(private configService: ConfigService) {
    this.meshyConfig = this.configService.get<MeshyConfig>('meshy');
  }

  getUrl() {
    return `${this.meshyConfig?.baseUrl}/chat`;
  }

  async testGet() {
    const header = {
      Authorization: `Bearer ${this.meshyConfig?.apiKey}`,
    };
    const url = `${this.meshyConfig?.baseUrl}/openapi/v2/text-to-3d`;

    const body = {
      mode: 'preview',
      prompt: 'a monster mask',
      negative_prompt: 'low quality, low resolution, low poly, ugly',
      art_style: 'realistic',
      should_remesh: true,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: header,
      body: JSON.stringify(body),
    });

    const data: any = await res.json();
    console.log('data', data, url);
    return;
  }

  async testDownload() {
    const textId = '019a584c-d233-7fbd-90f4-7f4bc3201fc5';
    const header = {
      Authorization: `Bearer ${this.meshyConfig?.apiKey}`,
    };
    const url = `${this.meshyConfig?.baseUrl}/openapi/v2/text-to-3d/${textId}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: header,
    });

    const data: any = await res.json();
    console.log('Status:', data, 'URL:', url);
    return;
  }
}
