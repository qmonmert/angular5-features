import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-http',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users | async">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class HttpComponent implements OnInit {

  users: Observable<User>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.users = this.http.get<User>('https://jsonplaceholder.typicode.com/users');
  }

}

interface User {
  id: number,
  name: string
}
