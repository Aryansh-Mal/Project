import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOverview1Component } from './product-overview1.component';

describe('ProductOverview1Component', () => {
  let component: ProductOverview1Component;
  let fixture: ComponentFixture<ProductOverview1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOverview1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOverview1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
