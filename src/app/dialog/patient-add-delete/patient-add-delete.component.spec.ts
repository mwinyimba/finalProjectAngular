import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddDeleteComponent } from './patient-add-delete.component';

describe('PatientAddDeleteComponent', () => {
  let component: PatientAddDeleteComponent;
  let fixture: ComponentFixture<PatientAddDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAddDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAddDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
