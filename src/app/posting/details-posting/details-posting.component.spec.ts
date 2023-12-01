import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostingComponent } from './details-posting.component';

describe('DetailsPostingComponent', () => {
  let component: DetailsPostingComponent;
  let fixture: ComponentFixture<DetailsPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
