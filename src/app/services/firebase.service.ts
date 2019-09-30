import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {User} from '../models/user.model';

@Injectable()
export class FirebaseService {
  private profileData: User[] = [];
  loggedInUsername = '';
  studentEmail = '';
  profilePictureUrl = '';

  constructor(private db: AngularFirestore) {}

  getLoggedInUsernam() {
    const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = userRef.get().toPromise()
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
    const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.studentEmail = doc.data().email;
        }
      });
    return this.studentEmail;
  }

  getProfilePicURL() {
    const userRef = this.db.collection('users').doc(localStorage.getItem('uid'));
    const getDoc = userRef.get().toPromise()
      .then(doc => {
        if (!doc.exists) {
          console.log('GetProfileData-fbs: Profile not found!');
        } else {
          this.profilePictureUrl = doc.data().photoURL;
        }
      });
    return this.profilePictureUrl;
  }
}
