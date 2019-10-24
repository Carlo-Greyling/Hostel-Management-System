export class TimeframetableModel {
  task: string;
  startingDate: string;
  endDate: string;

  constructor(task, start, end) {
    this.task = task;
    this.startingDate = start;
    this.endDate = end;
  }
}
