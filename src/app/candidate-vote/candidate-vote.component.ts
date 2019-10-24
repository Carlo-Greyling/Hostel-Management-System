import { Component, OnInit } from '@angular/core';

export interface Under_Prims {
  name : string;
}

export interface Prims {
  name : string;
}

export interface HCCandidates {
  name : string;
}


@Component({
  selector: 'app-candidate-vote',
  templateUrl: './candidate-vote.component.html',
  styleUrls: ['./candidate-vote.component.scss']
})
export class CandidateVoteComponent implements OnInit {

  underPrims: Under_Prims[] = [
    {name: 'Johannes van Rensburg'},
    {name: 'Piet Appelkoos'},
    {name: 'Eye of Sorrow'}
  ];

  Prims: Prims[] = [
    {name: 'Lood De Jager'},
    {name: 'Marco Bezuidenhout'},
    {name: 'Eye of Misery'}
  ];

  listOfCandidates: HCCandidates[] = [
    {name: 'Piet Pompies'},
    {name: 'Keanu Reeves'},
    {name: 'Jane Bolton'},
    {name: 'Mike Izzumi'},
    {name: 'Lil Uzi Vert'},
    {name: 'Kentucky Pete'},
    {name: 'Peter Griffin'}
  ]


  constructor() { }

  ngOnInit() {
  }

}
