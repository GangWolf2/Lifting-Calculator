import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightFinderResultsPage } from './weight-finder-results.page';

describe('WeightFinderResultsPage', () => {
  let component: WeightFinderResultsPage;
  let fixture: ComponentFixture<WeightFinderResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightFinderResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightFinderResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
