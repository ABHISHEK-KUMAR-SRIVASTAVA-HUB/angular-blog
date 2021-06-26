import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogRatingComponent } from './blog-rating.component';

describe('BlogRatingComponent', () => {
  let component: BlogRatingComponent;
  let fixture: ComponentFixture<BlogRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
