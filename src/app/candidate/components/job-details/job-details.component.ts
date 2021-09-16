import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestApiService } from '../../../_shared/rest-api.service';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  constructor(public api: RestApiService) {}
  first = 0;
  rows = 10;
  cols: any[];
  dataSource: any;
  loading: boolean = true;
  ngOnInit(): void {
    this.cols = [
      { field: 'jobCode', header: 'Job Code' },
      { field: 'position', header: 'Job Position' },
      { field: 'primarySkill', header: 'Primary Skill' },
      { field: 'secondarySkill', header: 'Secondary Skill' },
      { field: 'otherSkills', header: 'Other Skills' },
      { field: 'postedDate', header: 'Posted Date' },
      { field: 'experience', header: 'Exp Required' },
      { field: 'location', header: 'Location' },
    ];
    this.getAppliedJobs();
  }

  getAppliedJobs() {
    this.api.getRequest(environment.jobsBaseurl, 'all-applied-jobs').subscribe(
      (response: any) => {
        console.log('response', response);
        this.loading = false;
        this.dataSource = response;
        this.dataSource.forEach(
          (item: any) => (item.postedDate = new Date(item.postedDate))
        );
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.dataSource
      ? this.first === this.dataSource.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.dataSource ? this.first === 0 : true;
  }

  clear(table: any) {
    table.clear();
  }
}
