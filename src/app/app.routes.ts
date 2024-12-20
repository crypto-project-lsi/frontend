import { Routes } from '@angular/router';
import { CertificateComponent } from './components/certificate/certificate.component';
import { EncryptComponent } from './components/encrypt/encrypt.component';
import { DecryptComponent } from './components/decrypt/decrypt.component';

export const routes: Routes = [
    
    { path: 'certificate', component: CertificateComponent },
    { path: 'encrypt', component: EncryptComponent },
    { path: 'decrypt', component: DecryptComponent },
    { path: '', redirectTo: '/certificate', pathMatch: 'full' },

];
