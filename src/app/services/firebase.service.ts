import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {User} from '../models/user.model';
import {CalendarEvent} from "../models/calendarevent.model";
import {Ticket} from './ticket.model';

@Injectable()
export class FirebaseService {
  private profileData: User[] = [];
  loggedInUsername = '';
  studentEmail = '';
  profilePictureUrl = '';
  userRef;
  uid;
  userType;
  hostelId = '';
  events: CalendarEvent[] = [];

  constructor(private db: AngularFirestore) {
    this.userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
  }

  getHostelId() {
    // const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = this.userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('getHostelId-fbs: Profile not found!');
        } else {
          this.hostelId = doc.data().hostelId;
        }
      });
    return this.hostelId;
  }

  Addevent(hostelId, date, title, description) {
    let dateArr: string[] = [];
    let descArr: string[] = [];
    let titleArr: string[] = [];
    let idArr: number[] = [];

    const ref = this.db.collection('hostels').doc(localStorage.getItem('hostelId'));
    const getDoc = ref.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found');
        } else {
          dateArr = doc.data().date;
          descArr = doc.data().description;
          titleArr = doc.data().title;
          idArr = doc.data().eventID;

          dateArr.push(date);
          descArr.push(description);
          titleArr.push(title);
          idArr.push(idArr.length + 1);

          const data = {
            date: dateArr,
            description: descArr,
            title: titleArr,
            eventID: idArr
          };

          ref.set(data);
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
  }

  getEvents(): CalendarEvent[] {
    let dateArr: string[] = [];
    let descArr: string[] = [];
    let titleArr: string[] = [];
    this.events = [];

    const ref = this.db.collection('hostels').doc(localStorage.getItem('hostelId'));
    const getDoc = ref.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('not found');
        } else {
          dateArr = doc.data().date;
          descArr = doc.data().description;
          titleArr = doc.data().title;
          for (let i = 0; i < dateArr.length; i++) {
            this.events.push(new CalendarEvent(titleArr[i], dateArr[i], descArr[i], i));
          }
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
    console.log(this.events);
    return this.events;
  }

  getLoggedInUsername() {
    // const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = this.userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.loggedInUsername = doc.data().displayName;
        }
      });
    return this.loggedInUsername;
  }

  getLoggedInUsernameWithPar(uid) {
    const ref = this.db.collection('users').doc(uid);
    const getDoc = this.userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.loggedInUsername = doc.data().displayName;
        }
      });
    return this.loggedInUsername;
  }

  getStudentEmail() {
    // const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = this.userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.studentEmail = doc.data().email;
        }
      });
    return this.studentEmail;
  }

  getStudentEmailWithPar(uid) {
    const ref = this.db.collection('users').doc(uid);
    const getDoc = this.userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.studentEmail = doc.data().email;
        }
      });
    return this.studentEmail;
  }

  getProfilePicURLWithPar(uid) {
    const ref = this.db.collection('users').doc(uid);
    const getDoc = ref.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.profilePictureUrl = doc.data().BASE64PP;
        }
      });
    return this.profilePictureUrl;
  }

  getProfilePicURL() {
    // const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = this.userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.profilePictureUrl = doc.data().photoURL;
        }
      });
    return this.profilePictureUrl;
  }

  getUidWithStudentNum(studentNumber) {
    const studentRef = this.db.collection('students').doc(studentNumber);
    const getDoc = studentRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('getUidWithStudentNum-fbs: Profile not found!');
        } else {
          this.uid = doc.data().uid;
        }
      });
    return this.uid;
  }

  getUserType(uid) {
    const studentRef = this.db.collection('users').doc(uid);
    const getDoc = studentRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('getUserType-fbs: Error');
        } else {
          this.userType = doc.data().userType;
          localStorage.setItem('userType', this.userType);
          localStorage.setItem('hostelId', doc.data().hostelId);
        }
      });
  }

  newRepairTicket(ticketNumber, newTicket: Ticket) {
    const ref = this.db.collection('hostels').doc(ticketNumber);
    const getDoc = ref.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          const data = {
            newTicket
          };

          ref.set(data);
        } else {
          console.log('Ticket Exists');
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
  }

  AttendanceRegister(uid, eventId) {
    let arr: string[] = [];
    const userRef = this.db.collection('users').doc(uid);
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('Error');
        } else {
          arr = doc.data().eventsPart;
          arr.push(eventId);
          const data = {
            eventsPart: arr
        };
          userRef.set(data, { merge: true });
        }
      }).catch(err => {
        console.log('Error', err); // add toastr notification
      });
  }
}

