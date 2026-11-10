
import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';
import { AiService } from './ai.service';
import { AskAiDto } from './dto/ask-ai.dto';

@Controller('api/ai')
export class AiController {
  constructor(
    private readonly aiService: AiService,
  ) {}

  @Post('ask')
  async askQuestion(@Body() dto: AskAiDto) {
    return this.aiService.askQuestion(dto);
  }
}
