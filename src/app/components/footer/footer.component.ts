import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService,private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('You are logged out.');
    this.router.navigate(['/home']);
  }

}
