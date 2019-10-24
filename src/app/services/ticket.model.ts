export class Ticket {
  public ticketNumber: string;
  public studentNumber: string;
  public studentName: string;
  public roomNumber: string;
  public description: string;
  public hostelID: string;

  constructor(studentNumber: string, studentName: string, roomNumber: string, description: string, hostelID: string) {
    this.studentNumber = studentNumber;
    this.studentName = studentName;
    this.roomNumber = roomNumber;
    this.description = description;
    this.hostelID = hostelID;
  }
}
