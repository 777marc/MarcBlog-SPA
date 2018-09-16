import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogpostService } from '../../_services/blogpost.service';
import { Blogpost } from '../../_models/Blogpost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public posts: Blogpost[];

  constructor(private blogpostService: BlogpostService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.posts = data['blogposts'];
    });
  }
}
