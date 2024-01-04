import { Component } from '@angular/core';
import { ConversorService } from '../services/conversor.service';

@Component({
  selector: 'app-receive-pdf',
  standalone: true,
  imports: [],
  templateUrl: './receive-pdf.component.html',
  styleUrl: './receive-pdf.component.scss'
})
export class ReceivePdfComponent {
  selectedFile: File | null = null;
  constructor(private conversorService: ConversorService){}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    // Aqui você pode adicionar mais lógica, como exibir o PDF, enviar para um servidor, etc.

  }
  onButtonClick() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('pdfFile', this.selectedFile);

      this.conversorService.uploadPdf(formData).subscribe(
        (response) => {
          console.log('Arquivo enviado com sucesso');
          // Faça algo com a resposta do servidor, que pode conter dados extraídos do PDF.
        },
        (error) => {
          console.error('Erro ao enviar o arquivo:', error);
          // Trate o erro de acordo com sua lógica de manipulação de erros.
        }
      );
    } else {
      console.warn('Nenhum arquivo selecionado.');
      // Lide com o caso em que nenhum arquivo foi selecionado.
    }
  }
}
