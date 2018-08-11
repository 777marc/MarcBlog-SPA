import { Component, OnInit } from '@angular/core';
import { BlogpostService } from '../../../_services/blogpost.service';
import { Blogpost } from '../../../_models/Blogpost';
import { positionElements } from 'ngx-bootstrap/positioning/ng-positioning';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Blogpost[];
  public post: Blogpost;

  constructor(private blogpostService:  BlogpostService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.blogpostService.getPosts().subscribe(result => {
      this.posts = result.json();
      this.post = this.posts[0];
    }, error => {
      console.log(error);
    });
  }



}
