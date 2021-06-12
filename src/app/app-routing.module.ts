import { WidgetDesignComponent } from './widget-design/widget-design.component';
import { WidgetOverviewComponent } from './widget-overview/widget-overview.component';
import { ConsoleComponent } from './console/console.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'console', component: ConsoleComponent, children: [
    {path: '', redirectTo: 'overview', pathMatch: 'full'},
    {path: 'overview', component: WidgetOverviewComponent},
    {path: 'design', component: WidgetDesignComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
