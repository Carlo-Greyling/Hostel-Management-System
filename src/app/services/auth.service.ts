import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {User} from '../models/user.model';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {switchMap} from 'rxjs/operators';
import {auth} from 'firebase';

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
      .then((result) => {
        this.updateUserData(result.user);
        localStorage.setItem('uid', result.user.uid);
        this.router.navigate(['hc-home/calender']);
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
