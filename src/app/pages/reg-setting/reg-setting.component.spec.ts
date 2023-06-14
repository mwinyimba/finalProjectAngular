import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegSettingComponent } from './reg-setting.component';

describe('RegSettingComponent', () => {
  let component: RegSettingComponent;
  let fixture: ComponentFixture<RegSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegSettingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
