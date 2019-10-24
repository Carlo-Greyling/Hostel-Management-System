import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateVoteComponent } from './candidate-vote.component';

describe('CandidateVoteComponent', () => {
  let component: CandidateVoteComponent;
  let fixture: ComponentFixture<CandidateVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
