import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggitemComponent } from './bloggitem.component';

describe('BloggitemComponent', () => {
  let component: BloggitemComponent;
  let fixture: ComponentFixture<BloggitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloggitemComponent]
    });
    fixture = TestBed.createComponent(BloggitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
