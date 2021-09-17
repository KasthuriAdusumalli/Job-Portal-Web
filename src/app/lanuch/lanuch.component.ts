import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lanuch',
  templateUrl: './lanuch.component.html',
  styleUrls: ['./lanuch.component.scss'],
})
export class LanuchComponent implements OnInit {
  constructor(private router: Router) {}
  user: any = localStorage.getItem('userDetails');
  adminNavUrl: any;
  userNavUrl: any;
  ngOnInit(): void {
    this.user = localStorage.getItem('userDetails');
    this.adminNavUrl = this.user ? '/admin/employer' : '/admin/login';
    this.userNavUrl = this.user ? '/candidate/employer' : '/candidate/login';
  }
}
