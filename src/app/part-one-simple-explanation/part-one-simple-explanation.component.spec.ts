import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOneSimpleExplanationComponent } from './part-one-simple-explanation.component';

describe('PartOneSimpleExplanationComponent', () => {
  let component: PartOneSimpleExplanationComponent;
  let fixture: ComponentFixture<PartOneSimpleExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartOneSimpleExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartOneSimpleExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
