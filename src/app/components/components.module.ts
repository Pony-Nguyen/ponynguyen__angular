import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './contents/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { IntroduceComponent } from './contents/introduce/introduce.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IntroduceComponent,
  ],
  imports: [FormsModule, CommonModule, RouterModule, ReactiveFormsModule],
  exports: [
    SignInComponent,
    SignOutComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
