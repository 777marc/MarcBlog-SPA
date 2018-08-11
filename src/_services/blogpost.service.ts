import { Injectable, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Blogpost } from '../_models/Blogpost';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  public http : Http;
  public baseUrl : string;

  constructor(http: Http) { 
    this.http = http;
    this.baseUrl = 'http://localhost:5000/';
  }

  getPosts() {
    return this.http.get(this.baseUrl + 'api/blogposts');
  }

  getPost(id: number) {
    return this.http.get(this.baseUrl + 'api/blogposts/' + id.toString());
  }

}
