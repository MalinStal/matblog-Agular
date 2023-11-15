import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestformcreateComponent } from './testformcreate.component';

describe('TestformcreateComponent', () => {
  let component: TestformcreateComponent;
  let fixture: ComponentFixture<TestformcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestformcreateComponent]
    });
    fixture = TestBed.createComponent(TestformcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
