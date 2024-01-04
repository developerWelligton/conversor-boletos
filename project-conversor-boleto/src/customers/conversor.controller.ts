import { ConversorService } from './services/conversor.service';
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Conversor API')
@Controller('teste')
export class ConversorController {
  constructor(private conversorService: ConversorService) {}

    // Exemplo de um endpoint GET
    @Get()
  getHello(): { message: string } {
      return { message: 'Hello, this is a test API!2' };
  }

  @Post()
  @UseInterceptors(FileInterceptor('pdfFile'))
  async uploadPdf(@UploadedFile() file: Express.Multer.File): Promise<any> {
    try {
      const pdfData = await this.conversorService.extractDataFromPdf(file.path);
      // Faça algo com os dados extraídos do PDF, como salvar no banco de dados ou retornar como resposta
      return { extractedData: pdfData };
    } catch (error) {
      throw new Error(`Erro ao lidar com o PDF: ${error.message}`);
    }
  }
}
