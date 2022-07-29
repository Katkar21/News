import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdmindeskComponent } from './admindesk/admindesk.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RegComponent } from './reg/reg.component';
import { ResetComponent } from './reset/reset.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:"reg",component:RegComponent},
  {path:"login",component:LoginComponent},
  {path:"forgotpass",component:ForgotpassComponent},
  {path:"reset",component:ResetComponent},
  {path:"news/:emailId",component:NewsComponent},
  {path:"update/:emailId",component:UpdateProfileComponent},
  {path:"admin",component:AdminComponent},
  {path:"admindesk",component:AdmindeskComponent},
  {path:"home",component:HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
