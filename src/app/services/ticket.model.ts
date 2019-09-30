export class Ticket {
  public ticketNumber: number;
  public studentNumber: string;
  public studentName: string;
  public roomNumber: string;
  public description: string;

  constructor(ticketNumber: number, studentNumber: string, studentName: string, roomNumber: string, description: string) {
    this.ticketNumber = ticketNumber;
    this.studentNumber = studentNumber;
    this.studentName = studentName;
    this.roomNumber = roomNumber;
    this.description = description;
  }
}
