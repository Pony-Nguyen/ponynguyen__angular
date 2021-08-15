import { AuthGuard } from './../../services/auth.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { HomeComponent } from '../../components/contents/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [{ path: 'home', component: HomeComponent }],
    // canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardLayoutRoutingModule {}
