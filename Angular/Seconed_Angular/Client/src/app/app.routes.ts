// app-routing.module.ts
import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponentComponent } from './components/about-page-component/about-page-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutPageComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'sign-up', component: SignUpComponent },
];
