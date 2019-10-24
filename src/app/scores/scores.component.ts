import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.scss']
})
export class ScoresComponent implements OnInit {
  teamOne = '25';
  teamTwo = '13';

  constructor() { }

  ngOnInit() {
  }

}
