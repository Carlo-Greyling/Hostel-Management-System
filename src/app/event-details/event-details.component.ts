import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CalendarEvent} from '../models/calendarevent.model';
import {eventDragMutationMassager} from '@fullcalendar/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  eventdate: string;
  events: CalendarEvent[] = [];
  selectedEventIndex: number;
  title = '';
  description = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialog) { }

  ngOnInit() {
    this.eventdate = this.data.date;
    this.events = this.data.eventsArr;

    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].date === this.eventdate) {
        this.selectedEventIndex = i;
      }
    }

    this.title = this.events[this.selectedEventIndex].title;
    this.description = this.events[this.selectedEventIndex].description;
  }

  onCloseClicked() {
    const dialogRef = this.dialog.closeAll();
  }
}
