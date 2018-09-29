import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../../../_models/Blogpost';
import { BlogpostService } from '../../../_services/blogpost.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor(private blogpostService : BlogpostService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  private id: number;
  public blogpost: Blogpost; 
  public likes: number;

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getPost(this.id);
    });
  }

  getPost(id: number) {
    this.activatedRoute.data.subscribe(data => {
      this.blogpost = data['blogpost'];
      this.likes = this.blogpost.likes;
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  editBlogPost(id: number) {
    this.router.navigate(['/blog/new'],{ queryParams: {id: id}});
  }

  addLike(id: number) {
    this.blogpostService.addLike(id);
    this.likes = this.likes + 1;
  }

}
