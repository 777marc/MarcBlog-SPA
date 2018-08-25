import { Component, OnInit } from '@angular/core';
import { BlogpostService } from 'src/app/_services/blogpost.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newblogpost',
  templateUrl: './newblogpost.component.html',
  styleUrls: ['./newblogpost.component.css']
})
export class NewblogpostComponent implements OnInit {

  model: any ={};

  constructor(private blogpostSevice: BlogpostService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  submitPost() {
    this.blogpostSevice.addNewPost(this.model);
    this.alertify.success('Post Submitted!');
  }
}
