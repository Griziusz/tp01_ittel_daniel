import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditcardserviceService } from '../creditcardservice.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  constructor(private form: FormBuilder, private cardService : CreditcardserviceService) {}

  creditCardInfo : FormGroup;

  ngOnInit() {
    this.creditCardInfo = this.form.group({
      // code: [ '', [Validators.required, Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$')]],
      // ccv: ['', [Validators.required, Validators.pattern('^[0-9]{3}$')]],
      // expirationDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$')]]
      code: ['', Validators.required],
      ccv: ['', Validators.required], 
      expirationDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.creditCardInfo.valid) {
      this.cardService.addCard(this.creditCardInfo.value);
      this.creditCardInfo.reset();
    }
  }
}
