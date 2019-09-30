import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  studentNumber = localStorage.getItem('email').substring(0, 7);
  studentName = localStorage.getItem('username');
  studentEmail = localStorage.getItem('email');

  constructor() { }

  ngOnInit() {
  }

}
