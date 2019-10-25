import { Component, OnInit } from '@angular/core';
import { Ticket } from '../services/ticket.model';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.scss']
})
export class RepairsListComponent implements OnInit {
  ticketNumber;
  hostelID = 'Hombre';
  roomNumber;
  studentNumber;
  studentName;
  studentEmail;
  description;
  y = 0;

  repairsTickets = [
    {ticketNumber : 'UUP4QC7S',
      ticketEmail: 'New Repairs Ticket '  + 'UUP4QC7S' + ' Generated, Details As Follows: ' +
    'Hostel: ' + this.hostelID +
    'Room Number: ' + '12' +

    'Student Number: ' + '29685532' +
    'Student Name: ' + 'Carlo Greyling' +
    'Student Email: ' + '29685532@student.g.nwu.ac.za'
        +
    ' Description: ' + 'Broken Window'},

    {ticketNumber : '4FYFM04Y',
      ticketEmail: 'New Repairs Ticket ' + 'UUP4QC7S' + ' Generated, Details As Follows: ' +
    'Hostel: ' + this.hostelID +
    'Room Number: ' + '12' +

    'Student Number: ' + '29685532' +
    'Student Name: ' + 'Carlo Greyling' +
    'Student Email: ' + '29685532@student.g.nwu.ac.za' +

    ' Description: ' + 'Broken Window'},

    {ticketNumber : 'LIWQVPWA',
      ticketEmail: 'New Repairs Ticket ' + 'UUP4QC7S' + ' Generated, Details As Follows: ' +
    'Hostel: ' + this.hostelID +
    'Room Number: ' + '12' +

    'Student Number: ' + '29685532' +
    'Student Name: ' + 'Carlo Greyling' +
    'Student Email: ' + '29685532@student.g.nwu.ac.za' +

    ' Description: ' + 'Broken Window'},

    {ticketNumber : 'Y8B6B0NM',
      ticketEmail: 'New Repairs Ticket ' + 'UUP4QC7S' + ' Generated, Details As Follows: ' +
    'Hostel: ' + this.hostelID +
    'Room Number: ' + '12' +

    'Student Number: ' + '29685532' +
    'Student Name: ' + 'Carlo Greyling' +
    'Student Email: ' + '29685532@student.g.nwu.ac.za' +

    ' Description: ' + 'Broken Window'},

    {ticketNumber : '1WQ5DO7Q',
      ticketEmail: 'New Repairs Ticket ' + 'UUP4QC7S' + ' Generated, Details As Follows: ' +
    'Hostel: ' + this.hostelID +
    'Room Number: ' + '12' +

    'Student Number: ' + '29685532' +
    'Student Name: ' + 'Carlo Greyling' +
    'Student Email: ' + '29685532@student.g.nwu.ac.za' +

    ' Description: ' + 'Broken Window'},
  ];

  /*repairsTickets = [
    {ticketNumber : 'UUP4QC7S'},
    {ticketNumber : '4FYFM04Y'},
    {ticketNumber : 'LIWQVPWA'},
    {ticketNumber : 'Y8B6B0NM'},
    {ticketNumber : '1WQ5DO7Q'}
  ];*/

  populateArray() {
    /*for (let i = 0; i < 5; i++) {
      this.repairsTickets.push(i);
    }*/
  }

  constructor() { }

  ngOnInit() {
  }

}
