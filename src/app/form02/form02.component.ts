import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form02',
  templateUrl: './form02.component.html'
})
export class Form02Component implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        login: new FormControl('', {
          validators: Validators.required,
          updateOn: 'change'
        }),
        password: new FormControl('', {
          validators: Validators.required,
          updateOn: 'change'
        })
      }
    );
  }

  onSubmit() {
    console.info(this.loginForm);
  }

}
