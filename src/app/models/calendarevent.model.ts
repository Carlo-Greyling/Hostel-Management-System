export class CalendarEvent {
  title: string;
  date: string;
  description: string;
  eventID: string;

  constructor(title, date, desc, id) {
    this.title = title;
    this.date = date;
    this.description = desc;
    this.eventID = id;
  }
}
