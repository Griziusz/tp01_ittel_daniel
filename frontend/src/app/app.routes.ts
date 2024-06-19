import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component'
import { RouterModule, Routes } from "@angular/router";


export const routes: Routes = [
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
