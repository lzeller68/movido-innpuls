import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProjectPage } from './choose-project.page';

describe('ChooseProjectPage', () => {
  let component: ChooseProjectPage;
  let fixture: ComponentFixture<ChooseProjectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseProjectPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProjectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
