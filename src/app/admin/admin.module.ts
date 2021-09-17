import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { EmployerComponent } from './employer/employer.component';
import { PostJobInfoComponent } from './post-job-info/post-job-info.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { EditJobComponent } from './edit-job/edit-job.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminRegistrationComponent,
    EmployerComponent,
    PostJobInfoComponent,
    ViewJobComponent,
    AboutComponent,
    HelpComponent,
    FeedbackComponent,
    EditJobComponent,
  ],
  exports: [
    AdminLoginComponent,
    AdminRegistrationComponent,
    EmployerComponent,
    PostJobInfoComponent,
    ViewJobComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
