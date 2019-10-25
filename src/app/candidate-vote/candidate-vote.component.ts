import { Component, OnInit } from '@angular/core';
import { EligableCandidates } from '../models/candidate.model';

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

  newCandidate : string;
  userAdded = false;

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

  listOfCandidates: EligableCandidates[] = [
    {name: 'Piet Pompies'},
    {name: 'Keanu Reeves'},
    {name: 'Jane Bolton'},
    {name: 'Mike Izzumi'},
    {name: 'Lil Uzi Vert'},
    {name: 'Kentucky Pete'},
    {name: 'Peter Griffin'}
  ];

  onAddCandidate() {
      this.userAdded = true;
      this.listOfCandidates.push(new EligableCandidates(this.newCandidate));
  }

  onRemoveCandidate() {
    var index = this.listOfCandidates.length-1;
    this.listOfCandidates.splice(index, 1);
    this.userAdded = false;
  }

  onSubmitVote() {

  }

  constructor() { }

  ngOnInit() {
  }

}
