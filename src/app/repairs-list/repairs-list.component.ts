import { Component, OnInit } from '@angular/core';
import { RepairsComponent } from '../repairs/repairs.component';

@Component({
  selector: 'app-repairs-list',
  templateUrl: './repairs-list.component.html',
  styleUrls: ['./repairs-list.component.scss']
})
export class RepairsListComponent implements OnInit {
  repairsTickets: [];


  constructor() { }

  ngOnInit() {
  }

}
