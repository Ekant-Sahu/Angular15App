import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guar/auth.guard';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'admin',
    component: AdminComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'contact',
    component:  ContactComponent
  },
  {
    path:'project',
    component: ProjectComponent
  },
  {
    path:'projectdetails',
    component:ProjectdetailsComponent
  },
  {
    path: 'sing-up',
    component: SingUpComponent

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'Editor',
    component: TexteditorComponent

  },
  {
    path: 'event',
    component: EventComponent

  },
  {
    path:'**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
