import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddminhomepageComponent } from './addminhomepage.component';

describe('AddminhomepageComponent', () => {
  let component: AddminhomepageComponent;
  let fixture: ComponentFixture<AddminhomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddminhomepageComponent]
    });
    fixture = TestBed.createComponent(AddminhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
