import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardioRecordFormPage } from './new-cardio-record-form.page';

describe('NewCardioRecordFormPage', () => {
  let component: NewCardioRecordFormPage;
  let fixture: ComponentFixture<NewCardioRecordFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCardioRecordFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCardioRecordFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
