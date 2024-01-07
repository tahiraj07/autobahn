import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamsComponent } from './webcams.component';

describe('WebcamsComponent', () => {
  let component: WebcamsComponent;
  let fixture: ComponentFixture<WebcamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcamsComponent]
    });
    fixture = TestBed.createComponent(WebcamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
