import { Component, OnInit } from '@angular/core';
import { Ticket } from '../services/ticket.model';
import {FirebaseService} from '../services/firebase.service';
import {FirebaseListObservable} from '@angular/fire/database-deprecated';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-repairs',
  templateUrl: './repairs.component.html',
  styleUrls: ['./repairs.component.scss']
})
export class RepairsComponent implements OnInit {
  // public repairs: FirebaseListObservable<Ticket[]>;

  ticketNumber = 0;
  studentNumber: string;
  studentName: string;
  roomNumber: string;
  description: string;

  public generateTicket(): void {
    this.studentNumber = localStorage.getItem('email').substring(0, 7);
    this.studentName = localStorage.getItem('username');
    this.roomNumber = '88';
    this.description = 'Door broken';
    const newTicket = new Ticket(this.ticketNumber, this.studentNumber, this.studentName, this.roomNumber, this.description);
    this.ticketNumber++;
    // this.repairs.push(newTicket);
  }

  constructor(/*db: AngularFireDatabase*/) {
    // this.repairs = db.list('/repairs');
  }

  ngOnInit() {
    this.studentName = localStorage.getItem('username');
  }

}
