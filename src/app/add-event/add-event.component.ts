import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CalendarEvent} from '../models/calendarevent.model';
import {FirebaseService} from '../services/firebase.service';
import {NewEvent} from "../models/new-event.model";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  selectedDate = '';
  events: CalendarEvent[] = [];
  hostelId;

  constructor(private dialog: MatDialog,
              @Inject(MAT_DIALOG_DATA) public data,
              private fbs: FirebaseService) { }

  ngOnInit() {
    this.selectedDate = this.data.date;
    this.events = this.data.eventsArr;
    this.hostelId = this.fbs.getHostelId();
  }

  onAddEventClicked(title, desc) {
    console.log(this.hostelId);
    this.events.push(new CalendarEvent(title, this.selectedDate, desc));
    this.fbs.Addevent(this.hostelId, this.selectedDate, title, desc);
    const dialogRef = this.dialog.closeAll();
  }

  onCloseClicked() {
    const dialogRef = this.dialog.closeAll();
  }

}
