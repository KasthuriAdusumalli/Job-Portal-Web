import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Validation from '../../utils/validation';
import Swal from 'sweetalert2';
import { RestApiService } from '../../_shared/rest-api.service';
import { environment } from 'src/environments/environment';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  form: any = FormGroup;
  submitted = false;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  userDetails: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public apiService: RestApiService
  ) {
    this.userDetails = JSON.parse(localStorage.getItem('userDetails') || '');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      emailId: ['', [Validators.required, Validators.email]],
      skill: ['', Validators.required],
      qualification: ['', Validators.required],

      // acceptTerms: [false, Validators.requiredTrue],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      experience: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(1),
          Validation.numeric,
        ],
      ],
    });

    this.getUser();
  }

  getUser() {
    if (this.userDetails && this.userDetails.id)
      this.apiService
        .getEmployee(this.userDetails.id, environment.baseUrl)
        .subscribe(
          (x) => this.form.patchValue(x),
          (err) => {
            console.log(err.error.message);
            this.Toast.fire({
              icon: 'error',
              title: err.error.message,
            });
          }
        );
  }

  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.form.value.mobileNo = parseInt(this.form.value.mobileNo);
    if (this.form.invalid) {
      this.Toast.fire({
        icon: 'error',
        title: 'Please enter all required fields!!',
      });
      return;
    }
    // this.apiService
    //   .update(
    //     this.userDetails.id,
    //     this.form.value,
    //     environment.baseUrl,
    //     'update'
    //   )
    //   .subscribe(
    //     (response) => {
    //       console.log('update', response);
    //       localStorage.setItem('userDetails', JSON.stringify(response));
    //       this.userDetails = response;
    //       this.getUser();
    //       this.Toast.fire({
    //         icon: 'success',
    //         title: 'Profile updated successfully!!',
    //       });
    //     },
    //     (err) => {
    //       this.Toast.fire({
    //         icon: 'error',
    //         title: err,
    //       });
    //       console.log(err);
    //     }
    //   );
  }
}
