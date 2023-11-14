import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeBtnsComponent } from './like-btns.component';

describe('LikeBtnsComponent', () => {
  let component: LikeBtnsComponent;
  let fixture: ComponentFixture<LikeBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikeBtnsComponent]
    });
    fixture = TestBed.createComponent(LikeBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
