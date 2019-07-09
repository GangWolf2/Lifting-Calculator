import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightFinderPage } from './weight-finder.page';

describe('WeightFinderPage', () => {
  let component: WeightFinderPage;
  let fixture: ComponentFixture<WeightFinderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightFinderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightFinderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
