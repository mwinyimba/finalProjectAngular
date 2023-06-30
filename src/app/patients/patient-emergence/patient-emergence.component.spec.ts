import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEmergenceComponent } from './patient-emergence.component';

describe('PatientEmergenceComponent', () => {
  let component: PatientEmergenceComponent;
  let fixture: ComponentFixture<PatientEmergenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientEmergenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientEmergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
