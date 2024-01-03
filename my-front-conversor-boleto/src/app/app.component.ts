import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { ReceivePdfComponent } from './receive-pdf/receive-pdf.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReceivePdfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  httpClient=inject(HttpClient)
  title = 'AUTH Operations with Angular 17';
  /**
   *
   */
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }


  logout() {
    console.log("logout")
  }
}
