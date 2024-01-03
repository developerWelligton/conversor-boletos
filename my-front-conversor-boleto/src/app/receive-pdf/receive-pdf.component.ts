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
    this.conversorService.getHello().subscribe(res => {
      console.log("res"+res)
    })
  }
  onButtonClick() {
    this.conversorService.getHello().subscribe(data => {
      console.log(data);
    })
  }
}
