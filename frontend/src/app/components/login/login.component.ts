import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Element } from '../../types/element';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
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
      const user : Element = {
        username: this.form.value.username,
        password: this.form.value.password
      }
      this.apiService.login(user).subscribe(
        (response) => {
          alert(JSON.stringify(response));
        }
      );
    } else {
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control?.markAsTouched({ onlySelf: true });
      });
    }
  }
}
