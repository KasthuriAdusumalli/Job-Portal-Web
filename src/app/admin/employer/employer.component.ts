import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss'],
})
export class EmployerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  Logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
