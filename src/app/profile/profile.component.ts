import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentNumber = localStorage.getItem('email').substring(0, 8);
  studentName = localStorage.getItem('username');
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
  }

}
