import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportsComponent } from './reports/reports.component';
import { ResponsesComponent } from './responses/responses.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './helpers/auth.guard';

const routes: Routes = [
  { path: 'login',      component: AuthComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'reports',    component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'responses',  component: ResponsesComponent, canActivate: [AuthGuard] },
  { path: '',     redirectTo: '/dashboard', pathMatch:'full' },
  { path: '**',   redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }