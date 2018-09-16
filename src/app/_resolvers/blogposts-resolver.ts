import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Blogpost } from '../_models/Blogpost';
import { BlogpostService } from '../_services/blogpost.service';
import { AlertifyService } from '../_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { error } from '@angular/compiler/src/util';

@Injectable()
export class BlogpostsResolver implements Resolve<Blogpost[]> {

  constructor(private blogPostService: BlogpostService,
              private router: Router,
              private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Blogpost[]> {
      return this.blogPostService.getPosts().pipe(
        catchError(error => {
          this.alertify.error('Problem retrieving data.');
          this.router.navigate(['/about']);
          return of(null);
        })
      )
    }
}
