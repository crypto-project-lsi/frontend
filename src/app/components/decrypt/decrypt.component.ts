import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-decrypt',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './decrypt.component.html',
  styleUrl: './decrypt.component.scss'
})
export class DecryptComponent {
  ciphertext: string = '';
  decryptedMessage: string = '';

  async decryptMessage() {
    try {
      const data = await ApiService.decryptMessage(this.ciphertext);
      this.decryptedMessage = data.message;
    } catch (error) {
      console.error('Erreur lors du déchiffrement:', error);
    }
  }
}
