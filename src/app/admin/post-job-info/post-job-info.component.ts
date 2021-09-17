import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { PostjobinfoService } from '../../_services/postjobinfo.service';
@Component({
  selector: 'app-post-job-info',
  templateUrl: './post-job-info.component.html',
  styleUrls: ['./post-job-info.component.scss'],
})
export class PostJobInfoComponent implements OnInit {
  alert: boolean = false;
  submitted = false;
  add_job_requ_form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private apiService: PostjobinfoService
  ) {}

  ngOnInit(): void {
    this.add_job_requ_form = this.fb.group({
      jobCode: new FormControl('', [
        Validators.required,
        Validators.maxLength(6),
        Validators.pattern('^[0-9]*$'),
      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      // ,Validators.minLength(10),Validators.maxLength(12)
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      primarySkill: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      secondarySkill: [''],
      otherSkill: [''],
      responsebilities: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern('[a-zA-Z]*'),
      ]),
      experience: new FormControl('', [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{1}$'),
      ]),
      salary: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
    });
  }
  get f() {
    return this.add_job_requ_form.controls;
  }
  onSubmit() {
    this.submitted = true;
    this.apiService.post(this.add_job_requ_form.value).subscribe(
      (response): any => {
        this.alert = true;
        this.add_job_requ_form.reset({});
        console.log('response', response);
      },
      (err) => {
        console.log('err', err);
      }
    );
  }
}
