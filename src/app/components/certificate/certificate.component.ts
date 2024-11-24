import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.scss'
})
export class CertificateComponent {
  certificate: string = '';

  async fetchCertificate() {
    try {
      const data = await ApiService.getCertificate();
      this.certificate = data.certificate;
    } catch (error) {
      console.error('Erreur lors de la récupération du certificat:', error);
    }
  }
}
