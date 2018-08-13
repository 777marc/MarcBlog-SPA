import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ConsultingComponent } from './components/consulting/consulting.component';
import { BlogpostComponent } from 'src/app/components/blogpost/view/blogpost.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'consulting', component: ConsultingComponent },
    { path: 'blogpost/:id', component: BlogpostComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
