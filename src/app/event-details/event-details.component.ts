import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {CalendarEvent} from '../models/calendarevent.model';
import {eventDragMutationMassager} from '@fullcalendar/core';
import {AddEventComponent} from '../add-event/add-event.component';

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
  userIsHc = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dialog: MatDialog) {
    this.userType = localStorage.getItem('userType');
    console.log(this.userType);
  }

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
    if (this.title === '' || this.title === null) {
      this.title = 'There is no event set for this day.';
      this.description = 'There is no event set for this day.';
    }
    /*this.userType = localStorage.getItem('userType');
    console.log(this.userType);*/
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
