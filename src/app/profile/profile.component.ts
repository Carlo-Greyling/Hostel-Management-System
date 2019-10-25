import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentNumber = localStorage.getItem('email').substring(0, 8);
  studentName;
  studentEmail = localStorage.getItem('email');

  uploadStudentCard(event: any) {
    const reader = new FileReader();
    reader.readAsDataURL(event);
    let result;
    reader.onload = (e) => {
      result = reader.result;
      console.log(result);
      return result;
    };
  }

  constructor() { }

  ngOnInit() {
    this.studentName = localStorage.getItem('username');
    this.studentName = localStorage.getItem('username').toLowerCase();
    this.studentName = this.studentName.charAt(0).toUpperCase() + this.studentName.substring(1, this.studentName.indexOf(' '))
      + ' ' + this.studentName.charAt(this.studentName.indexOf(' ') + 1).toUpperCase()
      + this.studentName.substring(this.studentName.indexOf(' ') + 2, this.studentName.length);
  }

}
