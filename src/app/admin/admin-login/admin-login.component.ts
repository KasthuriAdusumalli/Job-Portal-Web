import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../../utils/admin';
import { AdminServiceService } from '../../_services/admin-service.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit {
  admin: Admin = new Admin();
  msg = '';

  constructor(
    private adminService: AdminServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  adminLogPage() {
    this.adminService.adminLogin(this.admin).subscribe(
      (data) => {
        console.log(data);
        if (data) localStorage.setItem('userDetails', JSON.stringify(data));
        console.log('response Received');
        this.goToJobList();
      },
      (error) => {
        console.log('exception occured');
        this.msg = 'Bad credentials,please enter valid emailid and password';
      }
    );
  }

  goToJobList() {
    this.router.navigate(['/admin/employer']);
  }
  onSubmit() {
    console.log(this.admin);
    this.adminLogPage();
  }
}
