import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionsComponent } from './component-interactions.component';

describe('ComponentInteractionsComponent', () => {
  let component: ComponentInteractionsComponent;
  let fixture: ComponentFixture<ComponentInteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
