import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardioRecordsPage } from './cardio-records.page';

describe('CardioRecordsPage', () => {
  let component: CardioRecordsPage;
  let fixture: ComponentFixture<CardioRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardioRecordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardioRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
