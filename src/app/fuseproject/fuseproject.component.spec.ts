import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuseprojectComponent } from './fuseproject.component';

describe('FuseprojectComponent', () => {
  let component: FuseprojectComponent;
  let fixture: ComponentFixture<FuseprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuseprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuseprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
