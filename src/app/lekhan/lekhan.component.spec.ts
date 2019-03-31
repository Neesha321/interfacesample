import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LekhanComponent } from './lekhan.component';

describe('LekhanComponent', () => {
  let component: LekhanComponent;
  let fixture: ComponentFixture<LekhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LekhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LekhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
