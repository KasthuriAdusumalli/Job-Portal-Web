import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { AuthenticationGuard } from '../authentication.guard';
import { SearchJobsListComponent } from '../candidate/components/search-jobs-list/search-jobs-list.component';
import { CandidateReviewsComponent } from '../candidate/components/candidate-reviews/candidate-reviews.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'applied-jobs',
    component: JobDetailsComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'search-jobs',
    component: SearchJobsListComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'review',
    component: CandidateReviewsComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateRoutingModule {}
