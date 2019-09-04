import { PromedDetailsComponent } from './promed-details/promed-details.component';
import { CreatePromedComponent } from './create-promed/create-promed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromedListComponent } from './promed-list/promed-list.component';
import {UpdatePromedComponent} from './update-promed/update-promed.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  // { path: '', redirectTo: 'promed', pathMatch: 'full' },
  { path: 'promeds', component: PromedListComponent },
  { path: 'add', component: CreatePromedComponent },
  { path: 'update/:id', component: UpdatePromedComponent },
  { path: 'details/:id', component: PromedDetailsComponent },
  {path: 'logout', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
