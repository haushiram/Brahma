import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AppComponent } from './app.component';
import { UserRegistationComponent } from './user-registation/user-registation.component';

const routes: Routes = [  
  { path: '', component: AppComponent },
 { path: 'login-form', component: LoginFormComponent },
 { path: 'dash-board', component: DashBoardComponent },
 { path: 'user-registation', component: UserRegistationComponent },
// // otherwise redirect to home
// { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
