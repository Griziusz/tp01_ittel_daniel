import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form/form.component';
import { CreditcardserviceService } from './creditcardservice.service';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [
    FormComponent
  ],
  providers: [
    CreditcardserviceService
  ]
})
export class CreditcardModule { }
