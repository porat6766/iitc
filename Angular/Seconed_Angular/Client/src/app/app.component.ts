import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutPageComponentComponent } from './components/about-page-component/about-page-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    HomePageComponent,
    AboutPageComponentComponent,
    LoginComponentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent {}
