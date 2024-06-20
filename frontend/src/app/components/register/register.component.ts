import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    }, {
      validator: passwordMatchValidator
    });
  }

  get f() {
    return this.form.controls;
  }

  isInvalidControl(controlName: string, errorType: string) {
    const control = this.form.get(controlName);
    return control?.invalid && control.touched && control.errors?.[errorType];
  }

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value, null, 2));
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}

function passwordMatchValidator(control: AbstractControl) {
  const password = control.get('password');
  const confirm_password = control.get('confirm_password');

  if (password && confirm_password && password.value !== confirm_password.value) {
    confirm_password.setErrors({ 'passwordMismatch': true });
  } else {
    confirm_password?.setErrors(null);
  }
}