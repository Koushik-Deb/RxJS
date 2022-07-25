import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTwoOwnHttpObservableComponent } from './part-two-own-http-observable.component';

describe('PartTwoOwnHttpObservableComponent', () => {
  let component: PartTwoOwnHttpObservableComponent;
  let fixture: ComponentFixture<PartTwoOwnHttpObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartTwoOwnHttpObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartTwoOwnHttpObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
