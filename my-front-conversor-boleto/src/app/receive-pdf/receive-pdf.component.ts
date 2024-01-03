import { Component } from '@angular/core';

@Component({
  selector: 'app-receive-pdf',
  standalone: true,
  imports: [],
  templateUrl: './receive-pdf.component.html',
  styleUrl: './receive-pdf.component.scss'
})
export class ReceivePdfComponent {
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    // Aqui você pode adicionar mais lógica, como exibir o PDF, enviar para um servidor, etc.
  }
}
