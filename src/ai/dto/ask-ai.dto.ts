
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class AskAiDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  classGrade: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  subject: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  chapter: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  lesson?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10000)
  lessonContent?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  question: string;

  @IsIn(['English', 'Hindi', 'Bengali'])
  language: string;
}
