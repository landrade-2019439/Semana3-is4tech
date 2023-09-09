import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepicker4Component } from './datepicker4.component';

describe('Datepicker4Component', () => {
  let component: Datepicker4Component;
  let fixture: ComponentFixture<Datepicker4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Datepicker4Component]
    });
    fixture = TestBed.createComponent(Datepicker4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
