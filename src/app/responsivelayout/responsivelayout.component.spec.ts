import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsivelayoutComponent } from './responsivelayout.component';

describe('ResponsivelayoutComponent', () => {
  let component: ResponsivelayoutComponent;
  let fixture: ComponentFixture<ResponsivelayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsivelayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsivelayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
