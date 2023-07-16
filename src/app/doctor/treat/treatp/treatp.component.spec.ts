import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatpComponent } from './treatp.component';

describe('TreatpComponent', () => {
  let component: TreatpComponent;
  let fixture: ComponentFixture<TreatpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreatpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
