import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLogoutComponent } from './reg-logout.component';

describe('RegLogoutComponent', () => {
  let component: RegLogoutComponent;
  let fixture: ComponentFixture<RegLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
