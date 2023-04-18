import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatienlistComponent } from './patienlist.component';

describe('PatienlistComponent', () => {
  let component: PatienlistComponent;
  let fixture: ComponentFixture<PatienlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatienlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatienlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
