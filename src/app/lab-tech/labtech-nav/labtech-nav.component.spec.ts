import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabtechNavComponent } from './labtech-nav.component';

describe('LabtechNavComponent', () => {
  let component: LabtechNavComponent;
  let fixture: ComponentFixture<LabtechNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabtechNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabtechNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
