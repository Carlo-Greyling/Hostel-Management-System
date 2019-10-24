/* import { Component, OnInit, ViewChild } from '@angular/core';

export interface PeriodicElement {
  name: string;
  studentnum: number;
  no_votes: number;
  portfolio: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {studentnum: 27008592, name: 'Jeandre Pretorius', portfolio: 'Recruitment', no_votes: 27},
  {studentnum: 27015682, name: 'Carlo Greyling', portfolio: 'Sport', no_votes: 5},
  {studentnum: 26452596, name: 'Keanu Reeves', portfolio: 'RAG', no_votes: 12},
  {studentnum: 27568745, name: 'Stiaan Bouwer', portfolio: 'Arts & Culture', no_votes: 17},
];



@Component({
  selector: 'app-hc-vote',
  templateUrl: './hc-vote.component.html',
  styleUrls: ['./hc-vote.component.scss']
})
export class HcVoteComponent implements OnInit {

  displayedColumns: string[] = ['Student No.', 'Name', 'Portfolio', 'No. of Votes'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }
}

// Sorting isn't possible with angular material at this point: https://stackoverflow.com/questions/54982265/how-to-sort-mattabledatasource-programmatically 
*/

/*
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatSortable} from '@angular/material';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-hc-vote',
  templateUrl: './hc-vote.component.html',
  styleUrls: ['./hc-vote.component.scss']
})
export class HcVoteComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  sortDataSource(id: string, start: string){
    this.dataSource.sort.sort(<MatSortable>({id: id, start: start}));
  }
}

*/

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatSortable} from '@angular/material';

export interface PossibleCandidates {
  name: string;
  studentno: string;
  voteno: number;
  portfolio: string;
}

const ELEMENT_DATA: PossibleCandidates[] = [
  {studentno: '27008592', name: 'Piet', portfolio: 'Recruitement', voteno: 27},
  {studentno: '26458562', name: 'Jan', portfolio: 'RAG', voteno: 22},
  {studentno: '27154596', name: 'Koos', portfolio: 'SJGD', voteno: 12},
  {studentno: '26585466', name: 'Fred', portfolio: 'Sport', voteno: 18},
  {studentno: '27825463', name: 'Barney', portfolio: 'Arts', voteno: 14},
  {studentno: '27008592', name: 'Piet', portfolio: 'SJGD', voteno: 27},
  {studentno: '26458562', name: 'Vriend', portfolio: 'RAG', voteno: 22},
  {studentno: '27154596', name: 'Sakamoto', portfolio: 'SJGD', voteno: 12},
  {studentno: '26585466', name: 'Hlatse', portfolio: 'Sport', voteno: 18},
  {studentno: '27825463', name: 'Barney', portfolio: 'Clothing', voteno: 14}
];


@Component({
  selector: 'app-hc-vote',
  templateUrl: './hc-vote.component.html',
  styleUrls: ['./hc-vote.component.scss']
})
export class HcVoteComponent implements OnInit {
  displayedColumns: string[] = ['studentno', 'name', 'portfolio', 'voteno'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  sortDataSource(id: string, start: string){
    this.dataSource.sort.sort(<MatSortable>({id: id, start: start}));
  }
}