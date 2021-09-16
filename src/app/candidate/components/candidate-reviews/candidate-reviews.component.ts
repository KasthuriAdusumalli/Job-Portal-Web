import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidate-reviews',
  templateUrl: './candidate-reviews.component.html',
  styleUrls: ['./candidate-reviews.component.scss'],
})
export class CandidateReviewsComponent implements OnInit {
  form: any = FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      comments: ['', Validators.required],
      rating: ['', Validators.required],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Please enter all required fields!!',
      });
      return;
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Reviews Added Successfully!!!',
        text: '',
        timer: 2000,
      });
    }
    this.onReset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
