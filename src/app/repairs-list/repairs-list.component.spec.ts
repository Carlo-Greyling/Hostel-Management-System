import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairsListComponent } from './repairs-list.component';

describe('RepairsListComponent', () => {
  let component: RepairsListComponent;
  let fixture: ComponentFixture<RepairsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
