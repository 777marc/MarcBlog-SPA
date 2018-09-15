import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogpost } from 'src/app/_models/Blogpost';
import { BlogpostService } from 'src/app/_services/blogpost.service';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public blogPosts : Blogpost[];

  constructor(private router: Router, private blogpostService: BlogpostService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.ListBlogPosts();
  }

  NewBlogPost() {
    this.router.navigate(['/blog/new']);
  }

  ListBlogPosts() {
    this.blogpostService.getPosts().subscribe( result => {
      this.blogPosts = result.json();
    });    
  }

  DeleteBlogPost(id: number) {
    this.blogpostService.deletePost(id).subscribe(result =>{
      this.ListBlogPosts();
    });
  }

  EditBlogPost(id: number) {

  }

}
