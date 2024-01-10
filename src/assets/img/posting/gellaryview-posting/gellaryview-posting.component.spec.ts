import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GellaryviewPostingComponent } from './gellaryview-posting.component';

describe('GellaryviewPostingComponent', () => {
  let component: GellaryviewPostingComponent;
  let fixture: ComponentFixture<GellaryviewPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GellaryviewPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GellaryviewPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
