import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Validation from '../utils/validation';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
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
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

  ) { }

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
        firstname: ['', Validators.required],
        lastname: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        skill: ['', Validators.required],
        
        acceptTerms: [false, Validators.requiredTrue],
        phonenumber: ['', [ Validators.required,
          // Validators.pattern("^[0-9]*$"),
          Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          Validators.minLength(10), Validators.maxLength(10)]],
        exp: ['', [ Validators.required,
            Validators.maxLength(2)]]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

 
  
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
      title: 'Sign up Success!!'
    })
    console.log(JSON.stringify(this.form.value, null, 2));
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}




