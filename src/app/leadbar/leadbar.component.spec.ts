import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadbarComponent } from './leadbar.component';

describe('LeadbarComponent', () => {
  let component: LeadbarComponent;
  let fixture: ComponentFixture<LeadbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
