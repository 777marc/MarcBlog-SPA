import { Component, OnInit } from '@angular/core';
import { BlogpostService } from 'src/app/_services/blogpost.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Blogpost } from 'src/app/_models/Blogpost';

@Component({
  selector: 'app-newblogpost',
  templateUrl: './newblogpost.component.html',
  styleUrls: ['./newblogpost.component.css']
})
export class NewblogpostComponent implements OnInit {

  model: any = {};
  id: number;
  pageTitle: string;

  constructor(private blogpostSevice: BlogpostService, 
              private alertify: AlertifyService, 
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.id = params['id'];
      if(this.id) {
        this.getPost(this.id);
        this.pageTitle = 'Edit Blog Post';
      }
      else {
        this.pageTitle = 'New Blog Post';
      }
    });
  };

  getPost(id: number) {
    this.blogpostSevice.getPost(id).subscribe(result => {
      this.model = result;
    }, error => {
      console.log(error);
    });
  }

  submitPost() {

    console.log('id',this.id);

    if(typeof this.id === 'undefined') {
      console.log('new');
      this.blogpostSevice.addNewPost(this.model);
    }
    else {
      this.blogpostSevice.editPost(this.model);
    }
   
    this.alertify.success('Post Submitted!');
  }
}
