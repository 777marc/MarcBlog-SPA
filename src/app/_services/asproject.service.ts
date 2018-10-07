import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ASProject } from '../_models/ASProject';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsprojectService {

  private baseUrl : string;

  constructor(private http: Http) { 
    this.baseUrl = environment.apiUrl;;
  }

  getProjects() {
    return this.http.get(this.baseUrl + 'asprojects')
                    .map(response => <ASProject[]>response.json());
  }

}
