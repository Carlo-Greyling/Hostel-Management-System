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

  availableCharacters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  studentEmail = localStorage.getItem('email');
  ticketNumber: string;
  studentNumber: string;
  studentName: string;
  roomNumber: string;
  description: string;
  hostelID: string;

  repairsGeneratedEmail: string;
  studentGeneratedEmail: string;

  emailHeader = 'Repairs Query Opened [#';



  public generateTicket(): void {
    for (let i = 0; i < 6; i++) {
      this.ticketNumber += this.availableCharacters.charAt(Math.floor(Math.random() * this.availableCharacters.length));
    }
    // this.ticketNumber = 'lByO332RjDLvZ0hDnLlj';
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

  public  generateHeader() {
    this.emailHeader += this.ticketNumber + ']';
  }

  public generateEmailRepairs() {
    this.repairsGeneratedEmail =
      'New Repairs Ticket ' + this.ticketNumber + ' Generated, Details As Follows: \n' +
      'Hostel: ' + this.hostelID +
      'Room Number: ' + this.roomNumber +
      '\n' +
      'Student Number: ' + this.studentNumber +
      'Student Name: ' + this.studentNumber +
      'Student Email: ' + this.studentEmail +
      '\n' +
      'Description: ' + this.description;
  }

  public generateEmailStudent() {
    this.studentGeneratedEmail =
      'Dear' + this.studentName + '\n' +
      'Your sales query ' + this.ticketNumber + ' has been created.\n' +
      'One of our sales representative should be getting back to you within 1 business days.'
    + '\n'
    + '\n'
    + 'If you wish to provide additional comments or information regarding the query, please reply to this email.';
  }

  constructor(private fps: FirebaseService) {

  }

  ngOnInit() {
    this.studentName = localStorage.getItem('username');
  }

}
