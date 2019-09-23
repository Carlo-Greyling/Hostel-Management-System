import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-hc-home',
  templateUrl: './hc-home.component.html',
  styleUrls: ['./hc-home.component.scss']
})
export class HcHomeComponent implements OnDestroy {
  loggedInUsername = 'Admin Admin';
  studentEmail = 'admin.admin@student.g.nwu.ac.za'

  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router,
              private auth: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  onLogOutClicked() {
    this.auth.signOut();
  }

  /*onCalenderClicked() {
    this.router.navigateByUrl('calender');
  }*/
}
