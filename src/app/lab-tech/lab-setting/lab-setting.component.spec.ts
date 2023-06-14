import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSettingComponent } from './lab-setting.component';

describe('LabSettingComponent', () => {
  let component: LabSettingComponent;
  let fixture: ComponentFixture<LabSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
