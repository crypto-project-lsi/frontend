import { Injectable } from '@angular/core';
import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:5000';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  static async getCertificate() {
    const response = await axios.get(`${API_BASE_URL}/get_certificate`);
    return response.data;
  }

  static async encryptMessage(message: string) {
    const response = await axios.post(`${API_BASE_URL}/encrypt`, { message });
    return response.data;
  }

  static async decryptMessage(ciphertext: string) {
    const response = await axios.post(`${API_BASE_URL}/decrypt`, { ciphertext });
    return response.data;
  }
}
