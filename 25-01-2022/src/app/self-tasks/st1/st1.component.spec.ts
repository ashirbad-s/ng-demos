import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ST1Component } from './st1.component';

describe('ST1Component', () => {
  let component: ST1Component;
  let fixture: ComponentFixture<ST1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ST1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ST1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
