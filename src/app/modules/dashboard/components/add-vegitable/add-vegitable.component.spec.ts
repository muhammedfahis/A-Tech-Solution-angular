import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVegitableComponent } from './add-vegitable.component';

describe('AddVegitableComponent', () => {
  let component: AddVegitableComponent;
  let fixture: ComponentFixture<AddVegitableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVegitableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVegitableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
