import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Blogpost } from '../_models/Blogpost';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {
  
  private baseUrl : string;

  constructor(private http: Http) { 
    this.baseUrl = environment.apiUrl;
  }

  getPosts() {
    return this.http.get(this.baseUrl + 'blogposts')
                    .map(response => <Blogpost[]>response.json());
  }

  getPost(id: number) {
    return this.http.get(this.baseUrl + 'blogposts/' + id)
                    .map(response => <Blogpost>response.json());
  }

  addNewPost(model: Blogpost) {
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'blogposts', body, options)
                    .catch((error:any) => Observable.throw(error.json().error)).subscribe();
  }

  editPost(model: Blogpost) {
    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.baseUrl + 'blogposts', body, options)
                    .catch((error:any) => Observable.throw(error.json().error)).subscribe();
  }

  deletePost(id: number) {
    return this.http.delete(this.baseUrl + 'blogposts/' + id.toString());
  }
  
  addLike(id: number) {
    console.log(id);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + 'blogposts/' + id, null, options)
                    .catch((error:any) => Observable.throw(error.json().error)).subscribe();

  }

}
