import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingDetalisComponent } from './posting-detalis.component';

describe('PostingDetalisComponent', () => {
  let component: PostingDetalisComponent;
  let fixture: ComponentFixture<PostingDetalisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostingDetalisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostingDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
