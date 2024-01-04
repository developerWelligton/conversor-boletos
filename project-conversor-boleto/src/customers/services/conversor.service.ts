import {  Injectable } from '@nestjs/common';
import * as fs from 'fs';  
import * as PDFParser from 'pdf-parse';
@Injectable()
export class ConversorService { 
    async extractDataFromPdf(pdfFilePath: string): Promise<string> {
        try {
          const dataBuffer = fs.readFileSync(pdfFilePath);
          const pdfData = await PDFParser(dataBuffer);
    
          // A variável pdfData agora contém os dados extraídos do PDF
          // Pode ser necessário processar ou filtrar esses dados, dependendo das suas necessidades
          const extractedText = pdfData.text;
    
          return extractedText;
        } catch (error) {
          throw new Error(`Erro ao extrair dados do PDF: ${error.message}`);
        }
      }
 
     
}
 
 
