import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from '../admin/admin-login/admin-login.component';
import { AdminRegistrationComponent } from '../admin/admin-registration/admin-registration.component';
import { EmployerComponent } from '../admin/employer/employer.component';
import { PostJobInfoComponent } from './post-job-info/post-job-info.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EditJobComponent } from './edit-job/edit-job.component';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  {
    path: '',
    redirectTo: '/admin/employer',
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: AdminRegistrationComponent,
  },
  {
    path: 'employer',
    component: EmployerComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'postJobInfo',
    component: PostJobInfoComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'viewJobPosted',
    component: ViewJobComponent,
    canActivate: [AuthenticationGuard],
  },

  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'help',
    component: HelpComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'feedBack',
    component: FeedbackComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'edit-job',
    component: EditJobComponent,
    canActivate: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
