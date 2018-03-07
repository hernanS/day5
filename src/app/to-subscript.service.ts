import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { POST } from './post.interface';


@Injectable()
export class ToSubscriptService {
  user;
  constructor(private  http: HttpClient) { }
  get_data(){
    return this.user = this.http.get<POST[]>('https://jsonplaceholder.typicode.com/posts/')
  }
}
