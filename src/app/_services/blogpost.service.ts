import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Blogpost } from '../_models/Blogpost';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  
  private baseUrl : string;

  constructor(private http: Http) { 
    this.baseUrl = 'http://localhost:5000/api/';
  }

  getPosts() {
    return this.http.get(this.baseUrl + 'blogposts');
  }

  getPost(id: number) {
    return this.http.get(this.baseUrl + 'blogposts/' + id.toString());
  }

  addNewPost(model: Blogpost) {
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'blogposts', body, options).catch((error:any) => Observable.throw(error.json().error)).subscribe();
  }

  deletePost(id: number) {
    return this.http.delete(this.baseUrl + 'blogposts/' + id.toString());
  }
  
}
