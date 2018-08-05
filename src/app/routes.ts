import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { ProcessAnalysisComponent } from './process-analysis/process-analysis.component';
import { TroubleShootingComponent } from './trouble-shooting/trouble-shooting.component';

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
