import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Validation from '../utils/validation';
import Swal from 'sweetalert2';
import { RestApiService } from '../_shared/rest-api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
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
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public apiService: RestApiService
  ) {}

  //only number will be add
  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  ngOnInit() {
    this.form = this.formBuilder.group(
      {
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
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
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
          ],
        ],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')],
      }
    );
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
    console.log(JSON.stringify(this.form.value, null, 2));
    this.registerCandidate(this.form.value);
  }

  registerCandidate(data: any) {
    this.apiService
      .postRequest(data, 'registration', environment.baseUrl)
      .subscribe(
        (response: any) => {
          console.log(response);
          if (response) {
            localStorage.setItem('userDetails', JSON.stringify(response));
            this.Toast.fire({
              icon: 'success',
              title: 'Registration success!!',
            });
            this.router.navigateByUrl('/dashboard');
          }
        },
        (error: any) => {
          console.log(error);
          if (this.form.invalid) {
            this.Toast.fire({
              icon: 'error',
              title: error.error.message.toUpperCase(),
            });
          }
        }
      );
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
