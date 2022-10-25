import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartThreeOperatorsComponent } from './part-three-operators.component';

describe('PartThreeOperatorsComponent', () => {
  let component: PartThreeOperatorsComponent;
  let fixture: ComponentFixture<PartThreeOperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartThreeOperatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartThreeOperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
