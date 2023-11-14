import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderCommentsComponent } from './render-comments.component';

describe('RenderCommentsComponent', () => {
  let component: RenderCommentsComponent;
  let fixture: ComponentFixture<RenderCommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderCommentsComponent]
    });
    fixture = TestBed.createComponent(RenderCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
