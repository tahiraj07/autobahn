import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcamsDetailsComponent } from './webcams-details.component';

describe('WebcamsDetailsComponent', () => {
  let component: WebcamsDetailsComponent;
  let fixture: ComponentFixture<WebcamsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebcamsDetailsComponent]
    });
    fixture = TestBed.createComponent(WebcamsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
