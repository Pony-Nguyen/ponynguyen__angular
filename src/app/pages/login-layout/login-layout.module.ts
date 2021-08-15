import { NgModule } from '@angular/core';
import { ComponentsModule } from '../../components/components.module';
import { LoginLayoutRoutingModule } from './login-layout-routing.module';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [],
  imports: [LoginLayoutRoutingModule, ComponentsModule, CommonModule],
})
export class LoginLayoutModule {}
