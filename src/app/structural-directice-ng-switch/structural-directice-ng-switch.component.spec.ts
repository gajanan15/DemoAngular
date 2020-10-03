import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirecticeNgSwitchComponent } from './structural-directice-ng-switch.component';

describe('StructuralDirecticeNgSwitchComponent', () => {
  let component: StructuralDirecticeNgSwitchComponent;
  let fixture: ComponentFixture<StructuralDirecticeNgSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirecticeNgSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirecticeNgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
