import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ASProject } from '../_models/ASProject';

@Injectable({
  providedIn: 'root'
})
export class AsprojectService {

  private baseUrl : string;

  constructor(private http: Http) { 
    this.baseUrl = 'http://localhost:5000/api/';
  }

  getProjects() {
    return this.http.get(this.baseUrl + 'asprojects')
                    .map(response => <ASProject[]>response.json());
  }

}
