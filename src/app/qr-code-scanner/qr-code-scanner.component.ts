import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import {BehaviorSubject} from 'rxjs';
import {MatDialog} from '@angular/material';
import {FirebaseService} from '../services/firebase.service';
import {CalendarEvent} from '../models/calendarevent.model';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.scss']
})
export class QrCodeScannerComponent implements OnInit {
  studentName: string;
  studentNumber: string;
  studentImage: SafeResourceUrl;
  userID: string;

  validAttendance = [];

  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  hasDevices: boolean;
  hasPermission: boolean;

  torchEnabled = false;
  torchAvailable$ = new BehaviorSubject<boolean>(false);
  tryHarder = false;

  qrResultString: string;

  formatsEnabled: BarcodeFormat[] = [
    /*BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,*/
    BarcodeFormat.QR_CODE,
  ];
  localArray: CalendarEvent[] = [];
  private eventId: any;

  constructor(private readonly _dialog: MatDialog, private fps: FirebaseService, private sanitizer: DomSanitizer) {
    const array = this.fps.getEvents();
    this.localArray = array; // TODO: this line assigns firebase array to local array, if code below fixed, remove this line!!!!!

    // TODO: Filter by date but not working
    /*const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    const myDate = yyyy + '-' + mm + '-' + dd;
    console.log(myDate);
    array.forEach((object) => {
      if (object.date === myDate) {
        this.localArray.push(object);
      }
    });*/
  }

  clearResult() {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    // this.playAudio();
    // this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
    //                  + toReturnImage.base64string);
    this.userID = this.fps.getUidWithStudentNum(resultString);
    console.log(this.userID);
    // this.studentImage = this.fps.getProfilePicURLWithPar(this.userID);
    this.studentImage = this.sanitizer.bypassSecurityTrustResourceUrl(this.fps.getProfilePicURLWithPar(this.userID));
    this.studentNumber = resultString;
    this.studentName = this.fps.getLoggedInUsernameWithPar(this.userID);
    console.log(this.studentName);

    this.openForm(resultString);
  }

  validate(resultString: string) {
    // this.validAttendance.push(resultString); Commented this original line out
    this.fps.AttendanceRegister(this.userID, this.eventId);
  }

  updateDatabase() {

  }

  openForm(resultString: string) {
    document.getElementById('successfulScan').style.display = 'block';
    this.studentNumber = resultString;
  }

  closeForm() {
    document.getElementById('successfulScan').style.display = 'none';
    this.clearResult();
  }

  /*playAudio() {
    const audio = new Audio();
    audio.src = '';
    audio.load();
    audio.play();
  }*/

  /*onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }*/

  /*openFormatsDialog() {
    const data = {
      formatsEnabled: this.formatsEnabled,
    };

    this._dialog
      .open(FormatsDialogComponent, { data })
      .afterClosed()
      .subscribe(x => { if (x) { this.formatsEnabled = x; } });
  }*/

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  /*openInfoDialog() {
    const data = {
      hasDevices: this.hasDevices,
      hasPermission: this.hasPermission,
    };

    this._dialog.open(AppInfoDialogComponent, { data });
  }*/

  onTorchCompatible(isCompatible: boolean): void {
    this.torchAvailable$.next(isCompatible || false);
  }

  /*toggleTorch(): void {
    this.torchEnabled = !this.torchEnabled;
  }

  toggleTryHarder(): void {
    this.tryHarder = !this.tryHarder;
  }*/

  ngOnInit() {
      this.qrResultString = '';
    // tslint:disable-next-line:max-line-length
      /*this.studentImage = 'https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/33961022_890902067768346_5437623309078364160_n.jpg?_nc_cat=104&_nc_oc=AQm1LG8Rvyj6GmK7CRQnP4bqOqgDOs-Yt2TfwZH5n9CKpB4sWfyx7_AIxqMTvRtYTKo&_nc_ht=scontent-jnb1-1.xx&oh=b848f48955c1d85f04fbeb71feb6923e&oe=5DEF4FED';
      this.studentName = 'Carlo';
      this.studentSurname = 'Greyling';
      this.studentNumber = 29685532;*/
  }

  setEID(eid) {
    this.eventId = eid;
  }
}
