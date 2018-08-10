import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Blogpost } from '../_models/Blogpost';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class BlogpostService {

  public http : Http;
  public baseUrl : string;

  constructor(http: Http, @Inject('BASE_URL') baseUrl: string) { 
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getPosts() {

  }

  getPost(id: number) {
    
  }

}
