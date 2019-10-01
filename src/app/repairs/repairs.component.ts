import { Component, OnInit } from '@angular/core';
import { Ticket } from '../services/ticket.model';
import {FirebaseService} from '../services/firebase.service';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {FirebaseDatabase, FirebaseFirestore} from '@angular/fire';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {
  public database = firebase.database();

  ticketNumber: string;
  studentNumber: string;
  studentName: string;
  roomNumber: string;
  description: string;
  hostelID: string;

  public generateTicket(): void {
    this.ticketNumber = 'lByO332RjDLvZ0hDnLlj';
    this.hostelID = 'Hombre';
    this.studentNumber = localStorage.getItem('email').substring(0, 7);
    this.studentName = localStorage.getItem('username');
    const newTicket = new Ticket(this.studentNumber, this.studentName, this.roomNumber, this.description, this.hostelID);
    firebase.database().ref('repairs/' + this.ticketNumber).set({newTicket},
      function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log('Write succeeded');
        }
      });
  }

  constructor(private fps: FirebaseService) {

  }

  ngOnInit() {
    this.studentName = localStorage.getItem('username');
  }

}
