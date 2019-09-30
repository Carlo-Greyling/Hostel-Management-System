import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user.model';

@Injectable()
export class FirebaseService {
  private profileData: User[] = [];
  loggedInUsername = '';
  studentEmail = '';
  profilePictureUrl = '';
  userRef;
  uid;

  constructor(private db: AngularFirestore) {
    this.userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
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
          this.profilePictureUrl = doc.data().photoURL;
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
}
