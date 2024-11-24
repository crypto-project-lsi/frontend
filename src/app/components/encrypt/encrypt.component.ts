import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-encrypt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './encrypt.component.html',
  styleUrl: './encrypt.component.scss'
})
export class EncryptComponent {
  message: string = '';
  ciphertext: string = '';

  async encryptMessage() {
    try {
      const data = await ApiService.encryptMessage(this.message);
      this.ciphertext = data.ciphertext;
    } catch (error) {
      console.error('Erreur lors du chiffrement:', error);
    }
  }
}
