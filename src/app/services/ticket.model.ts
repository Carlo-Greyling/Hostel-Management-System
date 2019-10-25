export class Ticket {
  public ticketNumber: string;
  public studentNumber: string;
  public studentName: string;
  public roomNumber: string;
  public description: string;
  public hostelID: string;
  public repairsGeneratedEmail: string;

  // tslint:disable-next-line:max-line-length
  constructor(studentNumber: string, studentName: string, roomNumber: string, description: string, hostelID: string, repairsGeneratedEmail: string) {
    this.studentNumber = studentNumber;
    this.studentName = studentName;
    this.roomNumber = roomNumber;
    this.description = description;
    this.hostelID = hostelID;
    this.repairsGeneratedEmail = repairsGeneratedEmail;
  }
}
