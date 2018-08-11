import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { appRoutes } from './routes';
import { ContactComponent } from './components/contact/contact.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { ProcessAnalysisComponent } from './components/process-analysis/process-analysis.component';
import { TroubleShootingComponent } from './components/trouble-shooting/trouble-shooting.component';
import { BlogpostService } from 'src/_services/blogpost.service';
import { BlogpostComponent } from 'src/app/components/blogpost/view/blogpost.component';

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
      ProcessAnalysisComponent,
      TroubleShootingComponent,
      BlogpostComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      HttpModule,
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot()
   ],
   providers: [
       BlogpostService
   ],
   bootstrap: [
      AppComponent
   ]
})

export class AppModule { }
