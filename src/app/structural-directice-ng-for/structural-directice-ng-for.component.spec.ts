import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirecticeNgForComponent } from './structural-directice-ng-for.component';

describe('StructuralDirecticeNgForComponent', () => {
  let component: StructuralDirecticeNgForComponent;
  let fixture: ComponentFixture<StructuralDirecticeNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirecticeNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirecticeNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
