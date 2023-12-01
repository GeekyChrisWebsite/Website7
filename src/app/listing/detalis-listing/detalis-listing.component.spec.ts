import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalisListingComponent } from './detalis-listing.component';

describe('DetalisListingComponent', () => {
  let component: DetalisListingComponent;
  let fixture: ComponentFixture<DetalisListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalisListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalisListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
