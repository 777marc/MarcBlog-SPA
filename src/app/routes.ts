import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogpostComponent } from 'src/app/components/blogpost/view/blogpost.component';
import { LoginComponent } from 'src/app/components/admin/login/login.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { AuthGuard } from 'src/app/_guards/auth.guard';
import { NewblogpostComponent } from 'src/app/components/blogpost/new/newblogpost.component';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { BlogpostResolver } from 'src/app/_resolvers/blogpost-resolver';
import { BlogpostsResolver } from 'src/app/_resolvers/blogposts-resolver';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent, resolve: {blogposts: BlogpostsResolver}},
    { path: 'about', component: AboutComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'blogpost/:id', component: BlogpostComponent, resolve: {blogpost: BlogpostResolver}},
    { path: 'admin/login', component: LoginComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
          {path: 'admin', component: AdminComponent},
          {path: 'blog/new', component: NewblogpostComponent},
        ]
     },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
