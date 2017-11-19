import { Component } from '@angular/core';

@Component({
  selector: 'app-preserve-whitespaces-false',
  template: `
    <button class="btn btn-success">Button1</button> <button class="btn btn-success">Button2</button>
  `,
  preserveWhitespaces: false
})
export class PreserveWhitespacesFalseComponent {

}
