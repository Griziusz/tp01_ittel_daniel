import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component'
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from './components/register/register.component';


export const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
