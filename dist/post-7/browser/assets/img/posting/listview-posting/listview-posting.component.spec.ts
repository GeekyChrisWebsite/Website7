import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewPostingComponent } from './listview-posting.component';

describe('ListviewPostingComponent', () => {
  let component: ListviewPostingComponent;
  let fixture: ComponentFixture<ListviewPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListviewPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListviewPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
