import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestApiService } from '../../../_shared/rest-api.service';
import * as _ from 'lodash';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search-jobs-list',
  templateUrl: './search-jobs-list.component.html',
  styleUrls: ['./search-jobs-list.component.scss'],
})
export class SearchJobsListComponent implements OnInit {
  first = 0;
  rows = 10;
  cols: any[];
  dataSource: any;
  loading: boolean = true;
  constructor(public api: RestApiService) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'jobCode', header: 'Job Code' },
      { field: 'position', header: 'Job Position' },
      { field: 'primarySkill', header: 'Primary Skill' },
      { field: 'secondarySkill', header: 'Secondary Skill' },
      { field: 'otherSkill', header: 'Other Skills' },
      { field: 'responsebilities', header: 'Responsibilities' },
      { field: 'experience', header: 'Experience' },
      { field: 'location', header: 'Location' },
      { field: 'salary', header: 'Salary' },
    ];
    this.getJobs();
  }

  getJobs() {
    this.api.getRequest(environment.adminApiUrl, 'all').subscribe(
      (response: any) => {
        console.log('admin jobs list', response);
        this.loading = false;
        this.dataSource = response;
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
  applyjob(jobdata: any) {
    let job: any = _.pick(jobdata, [
      'jobCode',
      'position',
      'location',
      'primarySkill',
      'secondarySkill',
      'experience',
    ]);
    job['otherSkills'] = jobdata.otherSkill || '';
    job['postedDate'] = new Date().toISOString();
    this.api
      .postRequest(job, 'post-apply-job', environment.jobsBaseurl)
      .subscribe(
        (res) => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: 'Job Applied successfully!!!',
              text: '',
              timer: 2000,
            });
          }
        },
        (err) => {
          console.log(err);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      );
  }
}
