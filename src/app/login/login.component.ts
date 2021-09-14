import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { RestApiService } from '../_shared/rest-api.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: any = FormGroup;
  submitted = false;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private api: RestApiService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.Toast.fire({
        icon: 'error',
        title: 'Please enter all required fields!!',
      });
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    this.login(this.form.value);
  }

  login(data: any) {
    this.api.postRequest(data, 'login', environment.baseUrl).subscribe(
      (res: any) => {
        localStorage.setItem('userDetails', JSON.stringify(res));
        let userdata: any = localStorage.getItem('userDetails');
        userdata = JSON.parse(userdata);
        console.log(userdata);
        this.Toast.fire({
          icon: 'success',
          title: 'Sign in Success!!',
        });
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log('err', error);
        this.Toast.fire({
          icon: 'error',
          title: error.error.message.toUpperCase(),
        });
      }
    );
  }
}
