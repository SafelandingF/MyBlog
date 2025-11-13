import { Controller, Get } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async testGet(): Promise<void> {
    return await this.chatService.testGet();
  }
  @Get('download')
  async testDownload(): Promise<void> {
    return await this.chatService.testDownload();
  }
}
