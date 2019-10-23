import { Component, OnInit } from '@angular/core';
import {TimeframetableModel} from '../models/timeframetable.model';
import {CostsModel} from '../models/costs.model';

export interface AdminOption {
  optionId: string;
  name: string;
}

export interface TimeFrame {
  task: string;
  startingDate: string;
  endDate: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  options: AdminOption[] = [
    {optionId: '0', name: 'Social - Event Report'}
  ];
  selectedNav: any;
  timeFrameArray: TimeFrame[] = [];
  costsArray: CostsModel[] = [];
  dataSource =  this.timeFrameArray;
  dataSource2 = this.costsArray;
  displayedColumns: string[] = ['task', 'startDate', 'endDate'];
  displayedColumns2: string[] = ['item', 'cost'];

  constructor() { }

  ngOnInit() {
  }

  AddToTimeFrame(task: string, startDate: string, endDate: string, table) {
    this.timeFrameArray.push(new TimeframetableModel(task, startDate, endDate));
    this.dataSource = this.timeFrameArray;
    table.renderRows();
  }

  AddToCosts(item: string, cost: string, table) {
    this.costsArray.push(new CostsModel(item, cost));
    this.dataSource2 = this.costsArray;
    table.renderRows();
  }
}
