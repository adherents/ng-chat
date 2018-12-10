import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthGuard } from './shared/services/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'chat', canActivate: [AuthGuard],
    children: [
      { path: '', component: ChatComponent},
      { path: ':chatroomId', component: ChatComponent}
    ]
  },
  { path: 'profile/:userId', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
