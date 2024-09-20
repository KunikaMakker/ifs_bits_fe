import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCouponComponent } from './home-coupon.component';

describe('HomeCouponComponent', () => {
  let component: HomeCouponComponent;
  let fixture: ComponentFixture<HomeCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
