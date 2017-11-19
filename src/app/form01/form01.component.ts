import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form01',
  templateUrl: './form01.component.html'
})
export class Form01Component {

  model = {
    login: "",
    password: ""
  }

  constructor() { }

  onSubmit() {
    console.info(`Login : ${this.model.login} - Password : ${this.model.password}`);
  }

}
