import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-org-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  form: FormGroup

  loadForm() {
    this.form = this.fb.group({
      email: [''],
      password: [''],
      remember: [false]
    })
  }

  constructor(
    private fb: FormBuilder
  ) { this.loadForm }

  ngOnInit(): void {
  }

}
