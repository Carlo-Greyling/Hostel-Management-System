import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HcVoteComponent } from './hc-vote.component';

describe('HcVoteComponent', () => {
  let component: HcVoteComponent;
  let fixture: ComponentFixture<HcVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
