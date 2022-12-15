import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaypalFailComponent } from './paypal-fail.component';

describe('PaypalFailComponent', () => {
  let component: PaypalFailComponent;
  let fixture: ComponentFixture<PaypalFailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaypalFailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaypalFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
