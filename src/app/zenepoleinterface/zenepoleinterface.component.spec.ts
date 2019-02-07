import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenepoleinterfaceComponent } from './zenepoleinterface.component';

describe('ZenepoleinterfaceComponent', () => {
  let component: ZenepoleinterfaceComponent;
  let fixture: ComponentFixture<ZenepoleinterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenepoleinterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenepoleinterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
