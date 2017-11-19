import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preserve-whitespaces-true',
  template: `
    <button class="btn btn-success">Button1</button> <button class="btn btn-success">Button2</button>
  `,
preserveWhitespaces: true
})
export class PreserveWhitespacesTrueComponent {

}
