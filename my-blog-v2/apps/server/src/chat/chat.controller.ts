import { Body, Controller, Get, Param, Post, UsePipes } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ZodValidationPipe } from '@/common/zod-validation.pipe';
import type { infer as ZodInfer } from 'zod';
import { z } from 'zod';
import {
  createTextTo3DPreviewRequestSchema,
  createTextTo3DRefineRequestSchema,
  createImageTo3DRequestSchema,
  createRemeshRequestSchema,
  createRetextureRequestSchema,
} from '@my-blog-v2/shared/schemas';

@Controller('meshy/openapi')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post('text-to-3d')
  @UsePipes(
    new ZodValidationPipe(
      z.discriminatedUnion('mode', [
        createTextTo3DPreviewRequestSchema,
        createTextTo3DRefineRequestSchema,
      ]),
    ),
  )
  async createTextTo3D(
    @Body()
    body:
      | ZodInfer<typeof createTextTo3DPreviewRequestSchema>
      | ZodInfer<typeof createTextTo3DRefineRequestSchema>,
  ) {
    return await this.chatService.createTextTo3D(body);
  }

  @Get('text-to-3d/:taskId')
  async getTextTo3D(@Param('taskId') taskId: string) {
    return await this.chatService.getTextTo3DTask(taskId);
  }

  @Post('image-to-3d')
  @UsePipes(new ZodValidationPipe(createImageTo3DRequestSchema))
  async createImageTo3D(
    @Body() body: ZodInfer<typeof createImageTo3DRequestSchema>,
  ) {
    return await this.chatService.createImageTo3D(body);
  }

  @Get('image-to-3d/:taskId')
  async getImageTo3D(@Param('taskId') taskId: string) {
    return await this.chatService.getImageTo3DTask(taskId);
  }

  @Post('remesh')
  @UsePipes(new ZodValidationPipe(createRemeshRequestSchema))
  async createRemesh(@Body() body: ZodInfer<typeof createRemeshRequestSchema>) {
    return await this.chatService.createRemesh(body);
  }

  @Get('remesh/:taskId')
  async getRemesh(@Param('taskId') taskId: string) {
    return await this.chatService.getRemeshTask(taskId);
  }

  @Post('retexture')
  @UsePipes(new ZodValidationPipe(createRetextureRequestSchema))
  async createRetexture(
    @Body() body: ZodInfer<typeof createRetextureRequestSchema>,
  ) {
    return await this.chatService.createRetexture(body);
  }

  @Get('retexture/:taskId')
  async getRetexture(@Param('taskId') taskId: string) {
    return await this.chatService.getRetextureTask(taskId);
  }
}
