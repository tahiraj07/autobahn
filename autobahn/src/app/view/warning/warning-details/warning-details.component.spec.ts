import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningDetailsComponent } from './warning-details.component';

describe('WarningDetailsComponent', () => {
  let component: WarningDetailsComponent;
  let fixture: ComponentFixture<WarningDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WarningDetailsComponent]
    });
    fixture = TestBed.createComponent(WarningDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
