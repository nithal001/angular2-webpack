import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GlobalNavigationComponent } from './global-navigation/global-navigation.component';

import { routing } from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    GlobalNavigationComponent
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
