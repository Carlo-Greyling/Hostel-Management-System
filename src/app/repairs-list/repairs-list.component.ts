import { Component, OnInit } from '@angular/core';
import { Ticket } from '../services/ticket.model';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.scss']
})
export class RepairsListComponent implements OnInit {
  ticketNumber: string;
  hostelID = 'Hombre';
  roomNumber;
  studentNumber;
  studentName;
  studentEmail;
  description;

  repairsDetails: string[] = [
    'New Repairs Ticket ' + 'UUP4QC7S' + ' Generated, Details As Follows: ' +
    'Hostel: ' + this.hostelID +
    'Room Number: ' + '12' +

    'Student Number: ' + '29685532' +
    'Student Name: ' + 'Carlo Greyling' +
    'Student Email: ' + '29685532@student.g.nwu.ac.za' +

    'Description: ' + 'Broken Window',
  ];

  repairsTickets: string[] = [
    'UUP4QC7S',
    '4FYFM04Y',
    'LIWQVPWA',
    'Y8B6B0NM',
    '1WQ5DO7Q',
  ];
  i;

  populateArray() {
    /*for (let i = 0; i < 5; i++) {
      this.repairsTickets.push(i);
    }*/
  }

  constructor() { }

  ngOnInit() {
  }

}
