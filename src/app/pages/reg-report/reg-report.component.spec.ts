import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegReportComponent } from './reg-report.component';

describe('RegReportComponent', () => {
  let component: RegReportComponent;
  let fixture: ComponentFixture<RegReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
