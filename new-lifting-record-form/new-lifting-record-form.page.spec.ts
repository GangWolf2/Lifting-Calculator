import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLiftingRecordFormPage } from './new-lifting-record-form.page';

describe('NewLiftingRecordFormPage', () => {
  let component: NewLiftingRecordFormPage;
  let fixture: ComponentFixture<NewLiftingRecordFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLiftingRecordFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLiftingRecordFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
