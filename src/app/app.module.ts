import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { appRoutes } from './routes';
import { ContactComponent } from './components/contact/contact.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { BlogpostService } from '../app/_services/blogpost.service';
import { BlogpostComponent } from 'src/app/components/blogpost/view/blogpost.component';
import { AuthService } from 'src/app/_services/auth.service';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { LoginComponent } from 'src/app/components/admin/login/login.component';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { NewblogpostComponent } from 'src/app/components/blogpost/new/newblogpost.component';
import { ScrollToModule } from 'ng2-scroll-to-el';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      ProjectsComponent,
      ContactComponent,
      ConsultingComponent,
      BlogpostComponent,
      AdminComponent,
      LoginComponent,
      NewblogpostComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      HttpModule,
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot(),
      FormsModule,
      ScrollToModule.forRoot()
   ],
   providers: [
       BlogpostService,
       AuthService,
       AlertifyService,
       AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
