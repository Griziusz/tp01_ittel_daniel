import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component'
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';


export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
