import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

export interface CalendarEvent {
  title: string;
  date: string;
  description: string;
}

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss']
})
export class CalenderComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];
  events: CalendarEvent[] = [
    {title: 'Event 1', date: '2019-09-24', description: 'event 1'},
    {title: 'Event 2', date: '2019-09-25', description: 'event 2'},
    {title: 'Event 3', date: '2019-09-26', description: 'event 3'},
    {title: 'Event 4', date: '2019-09-27', description: 'event 4'},
    {title: 'Event 5', date: '2019-09-28', description: 'event 5'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
