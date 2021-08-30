import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = FormGroup;
  submitted = false;
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.form.controls; }
  onSubmit(): void {
  
    this.submitted = true;

    if (this.form.invalid) {
      this.Toast.fire({
        icon: 'error',
        title: 'Please enter all required fields!!'
      })
      return;
    }

    this.Toast.fire({
      icon: 'success',
      title: 'Sign in Success!!'
    })
    console.log(JSON.stringify(this.form.value, null, 2));
    
  }
}
