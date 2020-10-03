import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirecticeNgIfComponent } from './structural-directice-ng-if.component';

describe('StructuralDirecticeNgIfComponent', () => {
  let component: StructuralDirecticeNgIfComponent;
  let fixture: ComponentFixture<StructuralDirecticeNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirecticeNgIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirecticeNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
