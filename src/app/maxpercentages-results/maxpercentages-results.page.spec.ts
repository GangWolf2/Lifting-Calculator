import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxpercentagesResultsPage } from './maxpercentages-results.page';

describe('MaxpercentagesResultsPage', () => {
  let component: MaxpercentagesResultsPage;
  let fixture: ComponentFixture<MaxpercentagesResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxpercentagesResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxpercentagesResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
