import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.scss']
})
export class QRCodeGeneratorComponent implements OnInit {
  qrCodeEmail: string;
  display = false;
  value: string;
  elementType: 'url' | 'canvas' | 'img' = 'url';

  generateQRCode() {
    if (this.qrCodeEmail === '') {
      this.display = false;
      alert('Invalid student email!!!');
      return;
    } else {
      this.display = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
