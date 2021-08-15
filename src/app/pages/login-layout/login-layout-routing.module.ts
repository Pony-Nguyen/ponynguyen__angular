import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { ComponentsModule } from '../../components/components.module';
import { SignOutComponent } from '../../components/sign-out/sign-out.component';
import { SignInComponent } from '../../components/sign-in/sign-in.component';
const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-up', component: SignOutComponent },
];
@NgModule({
  declarations: [LoginLayoutComponent],
  imports: [RouterModule.forChild(routes), ComponentsModule],
  exports: [RouterModule],
})
export class LoginLayoutRoutingModule {}
