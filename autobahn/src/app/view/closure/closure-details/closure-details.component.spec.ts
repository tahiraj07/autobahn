import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosureDetailsComponent } from './closure-details.component';

describe('ClosureDetailsComponent', () => {
  let component: ClosureDetailsComponent;
  let fixture: ComponentFixture<ClosureDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosureDetailsComponent]
    });
    fixture = TestBed.createComponent(ClosureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
