import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DashboardComponent } from './candidate/components/dashboard/dashboard.component';
import { LanuchComponent } from './lanuch/lanuch.component';
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import(`./admin/admin.module`).then((module) => module.AdminModule),
  },
  {
    path: 'candidate',
    loadChildren: () =>
      import(`./candidate/candidate.module`).then(
        (module) => module.CandidateModule
      ),
  },
  { path: '', component: LanuchComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthenticationGuard],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
