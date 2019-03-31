import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlelekhanComponent } from './middlelekhan.component';

describe('MiddlelekhanComponent', () => {
  let component: MiddlelekhanComponent;
  let fixture: ComponentFixture<MiddlelekhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiddlelekhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddlelekhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
