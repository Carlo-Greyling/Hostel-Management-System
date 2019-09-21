import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HcHomeComponent } from './hc-home.component';

describe('HcHomeComponent', () => {
  let component: HcHomeComponent;
  let fixture: ComponentFixture<HcHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HcHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HcHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
