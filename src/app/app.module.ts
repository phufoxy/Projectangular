import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes} from '@angular/router'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import 'hammerjs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import {LoginGuard} from './login.guard';
import {NoLoginGuard} from './no-login.guard';
import { IndexComponent } from './component/index/index.component';
import { AdminComponent } from './component/admin/admin.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';

import {UserService} from './share-service/user.service';


import { MaterializeModule } from 'angular2-materialize';
const appRouter: Routes=[
  {path:'',component:LoginComponent},
  {path:'index',component:IndexComponent,canActivate:[LoginGuard]},
  {path:'admin',component:AdminComponent,},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    AdminComponent,
  ],
  imports: [
    MatExpansionModule,
    MaterializeModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [LoginGuard,NoLoginGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
