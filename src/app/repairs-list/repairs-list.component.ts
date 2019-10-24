import { Component, OnInit } from '@angular/core';
import { RepairsComponent } from '../repairs/repairs.component';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.scss']
})
export class RepairsListComponent implements OnInit {
  repairsTickets: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  i;

  populateArray() {
    /*for (let i = 0; i < 5; i++) {
      this.repairsTickets.push(i);
    }*/
  }

  constructor() { }

  ngOnInit() {
  }

}
