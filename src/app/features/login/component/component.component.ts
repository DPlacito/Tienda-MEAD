import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertsService } from 'src/app/core/core.module';

@Component({
  selector: 'my-org-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  form: FormGroup

  loadForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      remember: [false]
    })
  }

  get emailNoValido() {
    return this.form.get('email').touched && this.form.get('email').invalid;
  }

  get passwordNoValido() {
    return this.form.get('password').touched && this.form.get('password').invalid;
  }

  constructor(
    private fb: FormBuilder,
    private alerts: AlertsService
  ) { this.loadForm() }

  ngOnInit(): void {
  }

  login() {
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(controls => {
        controls.markAllAsTouched()
      })
    }
    console.log(this.form.value)
  }
}
