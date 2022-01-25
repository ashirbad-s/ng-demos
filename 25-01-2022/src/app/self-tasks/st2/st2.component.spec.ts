import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ST2Component } from './st2.component';

describe('ST2Component', () => {
  let component: ST2Component;
  let fixture: ComponentFixture<ST2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ST2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ST2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
