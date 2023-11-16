import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderBlogsComponent } from './render-blogs.component';

describe('RenderBlogsComponent', () => {
  let component: RenderBlogsComponent;
  let fixture: ComponentFixture<RenderBlogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RenderBlogsComponent]
    });
    fixture = TestBed.createComponent(RenderBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
