import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../utils/admin';
import { AdminServiceService } from '../../_services/admin-service.service';
@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss'],
})
export class AdminRegistrationComponent implements OnInit {
  admin: Admin = new Admin();
  msg = '';

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  adminRegistration() {
    this.adminService.adminRegister(this.admin).subscribe(
      (data) => {
        console.log(data);
        this.goToLogin();
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials,User with Email-Id is Allready Present';
      }
    );
  }

  goToLogin() {
    this.router.navigate(['/admin/login']);
  }
  onSubmit() {
    console.log(this.admin);
    this.adminRegistration();
  }
}
