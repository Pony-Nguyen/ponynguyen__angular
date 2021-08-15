import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/dashboard-layout/dashboard-layout.module').then(
        (m) => m.DashboardLayoutModule
      ),
    // canActivate: [AuthGuard],
  },
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('./pages/login-layout/login-layout.module').then(
  //       (m) => m.LoginLayoutModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
