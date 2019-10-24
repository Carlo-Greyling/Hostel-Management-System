import {Component, OnDestroy, OnInit} from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {CalendarEvent} from '../models/calendarevent.model';
import {MatDialog} from "@angular/material/dialog";
import {EventDetailsComponent} from "../event-details/event-details.component";
import {FirebaseService} from "../services/firebase.service";

/*export interface CalendarEvent {
  title: string;
  date: string;
  description: string;
}*/

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit, OnDestroy {
  calendarPlugins = [dayGridPlugin, interactionPlugin];
  events: CalendarEvent[] = [];
  /*events: CalendarEvent[] = [
    {title: 'Event 1', date: '2019-09-24', description: 'event 1'},
    {title: 'Event 2', date: '2019-09-25', description: 'event 2'},
    {title: 'Event 3', date: '2019-09-26', description: 'event 3'},
    {title: 'Event 4', date: '2019-09-27', description: 'event 4'},
    {title: 'Event 5', date: '2019-09-28', description: 'event 5'}
  ];*/

  constructor(private dialog: MatDialog, private fbs: FirebaseService) {
  }

  ngOnInit() {
    this.events.length = 0;
    this.events = [];
    this.events = this.fbs.getEvents();
  }

  ngOnDestroy(): void {
    this.events = [];
  }

  /*SubmitAddFields() {
    const dialogRef = this.dialog.open(CreatesubfieldComponent, {panelClass: 'custom-dialog-container',
      data:
        {
          userEmail: this.selectedUserEmail,
          userName: this.selectedUserFname,
          id: this.selectedUserID
        }
    });
  }*/

  onDateClicked(event) {
    console.log(event);
    const dialogRef = this.dialog.open(EventDetailsComponent, {panelClass: 'custom-dialog-container',
      data:
        {
          date: event.dateStr,
          eventsArr: this.events
          /*userEmail: this.selectedUserEmail,
          userName: this.selectedUserFname,
          id: this.selectedUserID*/
        }
    });
  }
}
