import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  userList: any = [];
  filter: string;
  constructor(private httpClient: HttpClient) {}
  ngOnInit() {
    this.applyFiler();
  }
  applyFiler(filter?: string) {
    let url = 'https://jsonplaceholder.typicode.com/posts?';
    url += filter ? 'userId=' + filter : '';
    this.httpClient.get(url).subscribe((res) => {
      this.userList = res;
    });
  }
}
