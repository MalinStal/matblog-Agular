import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogaComponent } from './loga.component';

describe('LogaComponent', () => {
  let component: LogaComponent;
  let fixture: ComponentFixture<LogaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogaComponent]
    });
    fixture = TestBed.createComponent(LogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
