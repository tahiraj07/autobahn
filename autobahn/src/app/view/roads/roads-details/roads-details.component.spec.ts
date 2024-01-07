import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsDetailsComponent } from './roads-details.component';

describe('RoadsDetailsComponent', () => {
  let component: RoadsDetailsComponent;
  let fixture: ComponentFixture<RoadsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadsDetailsComponent]
    });
    fixture = TestBed.createComponent(RoadsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
