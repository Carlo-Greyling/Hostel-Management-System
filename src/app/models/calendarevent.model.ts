export class CalendarEvent {
  title: string;
  date: string;
  description: string;

  constructor(title, date, desc) {
    this.title = title;
    this.date = date;
    this.description = desc;
  }
}
