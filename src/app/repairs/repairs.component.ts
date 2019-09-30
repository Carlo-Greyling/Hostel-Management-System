import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../services/firebase.service';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {
  studentName: string;
  userID: string;

  constructor() { }

  ngOnInit() {
    this.studentName = localStorage.getItem('username');
  }

}
