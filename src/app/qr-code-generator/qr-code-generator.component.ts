import { Component, OnInit } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import {MatDialog} from '@angular/material';
import {FirebaseService} from '../services/firebase.service';

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
  userID: string;

  generateQRCode() {
    this.userID = localStorage.getItem('uid');
    this.qrCodeEmail = this.fps.getStudentEmailWithPar(this.userID).substring(0, 7);
    if (this.qrCodeEmail === '') {
      this.display = false;
      alert('Invalid student email!!!');
      return;
    } else {
      this.display = true;
    }
  }

  constructor(private fps: FirebaseService) { }

  ngOnInit() {
    this.generateQRCode();
  }

}
