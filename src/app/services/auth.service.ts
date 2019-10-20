import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap} from 'rxjs/operators';
import {auth} from 'firebase';

export interface User {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;

  constructor(private router: Router,
              private afs: AngularFirestore,
              private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          this.user$ = null;
          return of(null);
        }
      })
    );
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider)
      .then((result) => { // 29685532@student.g.nwu.ac.za
        if (result.user.email.substring(8, 28) === '@student.g.nwu.ac.za') {
          console.log('Student Email Valid');
          this.updateUserData(result.user);
          localStorage.setItem('uid', result.user.uid);
          localStorage.setItem('email', result.user.email);
          localStorage.setItem('username', result.user.displayName);
          localStorage.setItem('picurl', result.user.photoURL);
          const userRef = this.afs.collection('users').doc(result.user.uid);
          const getDoc = userRef.get().toPromise()
            .then(doc => {
              if (!doc.exists) {
                console.log('Google SignIN-auth: Profile not found!');
              } else {
                const userType = doc.data().userType;
                if (userType === 'res') {
                  this.router.navigate(['residents-home/calender']);
                }
                if (userType === 'hc') {
                  this.router.navigate(['hc-home/calender']);
                }
              }
            });
        } else {
          console.log('Invalid Student Email');
        }
        // this.router.navigate(['hc-home/calender']);
      });
  }

  isLoggedIn() {
    if (this.user$ === null) {
      return false;
    } else {
      return true;
    }
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    localStorage.clear();
    return this.router.navigateByUrl('login');
  }

  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data = {
      displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid
    };
    localStorage.setItem('uid', user.uid);
    return userRef.set(data, { merge: true });
  }
}
