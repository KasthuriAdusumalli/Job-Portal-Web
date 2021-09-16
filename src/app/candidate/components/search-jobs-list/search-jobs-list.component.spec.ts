import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobsListComponent } from './search-jobs-list.component';

describe('SearchJobsListComponent', () => {
  let component: SearchJobsListComponent;
  let fixture: ComponentFixture<SearchJobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchJobsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
