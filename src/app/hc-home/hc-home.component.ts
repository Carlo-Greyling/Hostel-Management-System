import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FirebaseService} from '../services/firebase.service';
import {User} from '../models/user.model';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-hc-home',
  templateUrl: './hc-home.component.html',
  styleUrls: ['./hc-home.component.scss']
})
export class HcHomeComponent implements OnDestroy, OnInit {
  loggedInUsername = '';
  studentEmail = '';
  profilePictureUrl = '';

  private profileData: User[] = [];

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
              private auth: AuthService, private fbs: FirebaseService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);

    this.loggedInUsername = this.fbs.getLoggedInUsername();
    this.studentEmail = this.fbs.getStudentEmail();
    this.profilePictureUrl = this.fbs.getProfilePicURL();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.loggedInUsername = this.fbs.getLoggedInUsername();
    this.studentEmail = this.fbs.getStudentEmail();
    this.profilePictureUrl = this.fbs.getProfilePicURL();
  }

  onLogOutClicked() {
    this.auth.signOut();
  }

  /*onCalenderClicked() {
    this.router.navigateByUrl('calender');
  }*/
}
