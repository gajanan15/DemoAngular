import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponents123Component } from './demo-components123.component';

describe('DemoComponents123Component', () => {
  let component: DemoComponents123Component;
  let fixture: ComponentFixture<DemoComponents123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponents123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponents123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
