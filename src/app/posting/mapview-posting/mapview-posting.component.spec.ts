import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapviewPostingComponent } from './mapview-posting.component';

describe('MapviewPostingComponent', () => {
  let component: MapviewPostingComponent;
  let fixture: ComponentFixture<MapviewPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapviewPostingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapviewPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
