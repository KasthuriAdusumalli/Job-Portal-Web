import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostJobInfoComponent } from './post-job-info.component';

describe('PostJobInfoComponent', () => {
  let component: PostJobInfoComponent;
  let fixture: ComponentFixture<PostJobInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostJobInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostJobInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
