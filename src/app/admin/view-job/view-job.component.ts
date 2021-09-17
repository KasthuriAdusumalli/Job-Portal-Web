import { Component, OnInit } from '@angular/core';
import { ViewDataService } from '../../_services/view-data.service';
@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss'],
})
export class ViewJobComponent implements OnInit {
  data: any;
  constructor(private apiService: ViewDataService) {}

  ngOnInit(): void {
    this.apiService.getJobData().subscribe((result) => {
      console.warn('result', result);
      this.data = result;
    });
  }
}
