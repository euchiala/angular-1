import { NgModule } from '@angular/core';
import { flush } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { MemberListComponent } from './member-list/member-list.component';

const routes: Routes = [
  {
    path:'members',
    pathMatch:'full',
    component:MemberListComponent,
  },{
    path:'createMember',
    pathMatch:'full',
    component:MemberFormComponent,
  },{
    path:'members/:id/edit',
    pathMatch:'full',
    component:MemberFormComponent,
  },
  {
    path:'login',
    pathMatch:'full',
    component:LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
