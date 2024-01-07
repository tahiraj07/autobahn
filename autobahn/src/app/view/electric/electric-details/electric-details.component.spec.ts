import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricDetailsComponent } from './electric-details.component';

describe('ElectricDetailsComponent', () => {
  let component: ElectricDetailsComponent;
  let fixture: ComponentFixture<ElectricDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElectricDetailsComponent]
    });
    fixture = TestBed.createComponent(ElectricDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
