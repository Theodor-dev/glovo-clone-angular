import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestRestaurantListComponent } from './best-restaurant-list.component';

describe('BestRestaurantListComponent', () => {
  let component: BestRestaurantListComponent;
  let fixture: ComponentFixture<BestRestaurantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestRestaurantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestRestaurantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
