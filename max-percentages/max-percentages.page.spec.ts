import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPercentagesPage } from './max-percentages.page';

describe('MaxPercentagesPage', () => {
  let component: MaxPercentagesPage;
  let fixture: ComponentFixture<MaxPercentagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxPercentagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPercentagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
