import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QRCodeGeneratorComponent } from './qr-code-generator.component';

describe('QRCodeGeneratorComponent', () => {
  let component: QRCodeGeneratorComponent;
  let fixture: ComponentFixture<QRCodeGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QRCodeGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QRCodeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
