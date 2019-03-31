import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonlekhanComponent } from './buttonlekhan.component';

describe('ButtonlekhanComponent', () => {
  let component: ButtonlekhanComponent;
  let fixture: ComponentFixture<ButtonlekhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonlekhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonlekhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
