import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateReviewsComponent } from './candidate-reviews.component';

describe('CandidateReviewsComponent', () => {
  let component: CandidateReviewsComponent;
  let fixture: ComponentFixture<CandidateReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
