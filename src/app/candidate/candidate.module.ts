import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidateRoutingModule } from './candidate-routing.module';
import { HeaderComponent } from '../layout/header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiThemeModule } from '../ui-theme/ui-theme.module';
import { SearchJobsListComponent } from './components/search-jobs-list/search-jobs-list.component';
import { CandidateReviewsComponent } from './components/candidate-reviews/candidate-reviews.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    JobDetailsComponent,
    HeaderComponent,
    SearchJobsListComponent,
    CandidateReviewsComponent,
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProfileComponent,
    JobDetailsComponent,
    HeaderComponent,
    SearchJobsListComponent,
    CandidateReviewsComponent,
  ],

  imports: [
    CommonModule,
    CandidateRoutingModule,
    ReactiveFormsModule,
    UiThemeModule,
  ],
})
export class CandidateModule {}
