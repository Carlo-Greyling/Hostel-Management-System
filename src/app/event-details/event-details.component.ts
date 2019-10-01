import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CalendarEvent} from '../models/calendarevent.model';
import {eventDragMutationMassager} from '@fullcalendar/core';
import {AddEventComponent} from "../add-event/add-event.component";

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
  userType = '';

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

    this.userType = localStorage.getItem('userType');
  }

  onCloseClicked() {
    const dialogRef = this.dialog.closeAll();
  }

  onAddEventClicked() {
    const dialogRef = this.dialog.open(AddEventComponent, {panelClass: 'custom-dialog-container',
      data:
        {
          date: this.eventdate,
          eventsArr: this.events
          /*userEmail: this.selectedUserEmail,
          userName: this.selectedUserFname,
          id: this.selectedUserID*/
        }
    });
  }
}
