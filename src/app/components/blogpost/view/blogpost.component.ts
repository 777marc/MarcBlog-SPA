import { Component, OnInit } from '@angular/core';
import { Blogpost } from '../../../_models/Blogpost';
import { BlogpostService } from '../../../_services/blogpost.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-blogpost',
  templateUrl: './blogpost.component.html',
  styleUrls: ['./blogpost.component.css']
})
export class BlogpostComponent implements OnInit {

  constructor(private blogpostService : BlogpostService, private activatedRoute: ActivatedRoute) { }

  private id: number;
  public blogpost: Blogpost; 

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.getPost(this.id);
    });
  }

  getPost(id: number) {
    this.blogpostService.getPost(id).subscribe(result => {
      this.blogpost = result.json();
    }, error => {
      console.log(error);
    });

  }
}
