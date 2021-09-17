import { Component, OnInit } from '@angular/core';
import { ViewDataService } from '../../_services/view-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.scss'],
})
export class EditJobComponent implements OnInit {
  submitted = false;
  data: any;
  formValue!: FormGroup;

  constructor(private fb: FormBuilder, private apiservice: ViewDataService) {}

  ngOnInit(): void {
    this.formValue = this.fb.group({
      jobCode: ['', Validators.required],
      position: ['', Validators.required],
      // ,Validators.minLength(10),Validators.maxLength(12)
      location: ['', Validators.required],
      primarySkill: ['', Validators.required],
      secondarySkill: [''],
      otherSkill: [''],
      responsebilities: ['', Validators.required],
      experience: ['', [Validators.required, Validators.minLength(2)]],
      salary: ['', Validators.required],
    });
    this.showJobData();
  }
  showJobData() {
    this.apiservice.getJobData().subscribe((result) => {
      console.warn('result', result);
      this.data = result;
    });
  }

  formUpdate = {
    id: '',
    jobCode: '',
    position: '',
    location: '',
    primarySkill: '',
    secondarySkill: '',
    otherSkill: '',
    responsebilities: '',
    experience: '',
    salary: '',
  };
  upJobData(_data: any) {
    this.formUpdate = _data;
  }

  updateJobData() {
    this.apiservice.update(this.formUpdate.id, this.formUpdate).subscribe(
      (result) => {
        console.warn('result', result);
        alert('Record Updated Successfully');
        this.formValue.reset({});
        this.showJobData();
        console.log('response', result);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
  deleteJobData(id: any) {
    this.apiservice.delete(id).subscribe((result) => {
      this.showJobData();
      alert('Record Deleted Successfully');
    });
  }
  get f() {
    return this.formValue.controls;
  }
  deleteAllJob() {
    this.apiservice.deleteAll().subscribe(
      (result) => {
        console.warn('result', result);
        alert('All Records Deleted Successfully');
        this.showJobData();
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
