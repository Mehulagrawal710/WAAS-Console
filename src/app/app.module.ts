import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ConsoleComponent } from './console/console.component';
import { WidgetOverviewComponent } from './widget-overview/widget-overview.component';
import { WidgetDesignComponent } from './widget-design/widget-design.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ConsoleComponent,
    WidgetOverviewComponent,
    WidgetDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
