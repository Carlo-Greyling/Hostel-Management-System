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

  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  studentEmail = localStorage.getItem('email');
  ticketNumber = '';
  studentNumber: string;
  studentName: string;
  roomNumber: string;
  description: string;
  hostelID: string;

  public repairsGeneratedEmail: string;
  studentGeneratedEmail: string;

  emailHeader;

  public generateEmails() {
    this.generateTicket();
    this.generateHeader();
    this.generateEmailRepairs();
    this.generateEmailStudent();
    this.setNewTicket();
  }

  public generateTicket(): void {
    for (let i = 0; i < 8; i++) {
      this.ticketNumber += this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    }

    /*firebase.database().ref('repairs/' + this.ticketNumber).set({newTicket},
      function(error) {
        if (error) {
          console.log(error);
        } else {
          console.log('Write succeeded');
        }
      });*/
  }

  public  generateHeader() {
    this.emailHeader = 'Repairs Query Opened [#';
    this.emailHeader += this.ticketNumber + ']';
  }

  public generateEmailRepairs() {
    this.repairsGeneratedEmail =
      'New Repairs Ticket ' + this.ticketNumber + ' Generated, Details As Follows: ' +
      'Hostel: ' + this.hostelID +
      'Room Number: ' + this.roomNumber +

      'Student Number: ' + this.studentNumber +
      'Student Name: ' + this.studentNumber +
      'Student Email: ' + this.studentEmail +

      'Description: ' + this.description;
  }

  public generateEmailStudent() {
    this.studentGeneratedEmail =
      'Dear ' + this.studentName + '\n' +
      'Your repairs query [#' + this.ticketNumber + '] has been created.\n' +
      'One of our repairs representatives should be getting back to you within 1 business days.'
    + '\n'
    + '\n'
    + 'If you wish to provide additional comments or information regarding the query, please reply to this email.';
  }

  public setNewTicket() {
    const newTicket = new Ticket(this.studentNumber, this.studentName, this.roomNumber, this.description, this.hostelID, this.repairsGeneratedEmail);
    this.fps.newRepairTicket(this.ticketNumber, newTicket);
  }

  sendStudentEmail() {

  }

  sendRepairsEmail() {

  }

  sendEmails() {
    this.sendStudentEmail();
    this.sendRepairsEmail();
  }

  constructor(private fps: FirebaseService) {

  }

  ngOnInit() {
    this.hostelID = 'Hombre';
    this.studentNumber = localStorage.getItem('email').substring(0, 7);
    this.studentName = localStorage.getItem('username');
    this.studentName = localStorage.getItem('username').toLowerCase();
    this.studentName = this.studentName.charAt(0).toUpperCase() + this.studentName.substring(1, this.studentName.indexOf(' '))
      + ' ' + this.studentName.charAt(this.studentName.indexOf(' ') + 1).toUpperCase()
      + this.studentName.substring(this.studentName.indexOf(' ') + 2, this.studentName.length);
  }

}
