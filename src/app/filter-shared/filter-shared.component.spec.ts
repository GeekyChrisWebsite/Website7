import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSharedComponent } from './filter-shared.component';

describe('FilterSharedComponent', () => {
  let component: FilterSharedComponent;
  let fixture: ComponentFixture<FilterSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSharedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
