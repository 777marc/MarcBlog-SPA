import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { ProcessAnalysisComponent } from './components/process-analysis/process-analysis.component';
import { TroubleShootingComponent } from './components/trouble-shooting/trouble-shooting.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'consulting', component: ConsultingComponent },
    { path: 'process-analysis', component: ProcessAnalysisComponent },
    { path: 'trouble-shooting', component: TroubleShootingComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
