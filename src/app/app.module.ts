import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { appRoutes } from './routes';
import { ContactComponent } from './contact/contact.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ProcessAnalysisComponent } from './process-analysis/process-analysis.component';
import { TroubleShootingComponent } from './trouble-shooting/trouble-shooting.component';


@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      FooterComponent,
      HomeComponent,
      AboutComponent,
      ProjectsComponent,
      ContactComponent,
      ConsultingComponent,
      ProcessAnalysisComponent,
      TroubleShootingComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      BsDropdownModule.forRoot()
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
