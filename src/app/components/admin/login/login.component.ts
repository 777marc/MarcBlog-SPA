import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any ={};

  constructor(private authService : AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('You are logged in!');
      this.router.navigate(['/admin']);
    }, error => {
      this.alertify.error('failed to log in');
      this.router.navigate(['/']);
    });
  }
  
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
}
