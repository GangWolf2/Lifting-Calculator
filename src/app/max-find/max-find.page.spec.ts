import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxFindPage } from './max-find.page';

describe('MaxFindPage', () => {
  let component: MaxFindPage;
  let fixture: ComponentFixture<MaxFindPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxFindPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxFindPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
