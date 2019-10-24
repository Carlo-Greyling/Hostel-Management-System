
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource, MatSortable} from '@angular/material';

export interface PossibleCandidates { // Interface for candidates who want to be on the House Committee
  name: string;
  studentno: string;
  voteno: number;
  portfolio: string;
}

// Dummy data
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

  // Method to filter thtrough items on the table
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  // Uses MatSort to sort the data in the table
  sortDataSource(id: string, start: string){
    this.dataSource.sort.sort(<MatSortable>({id: id, start: start}));
  }
}