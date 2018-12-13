import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {FormDataComponent} from './FormData/FormData.component';
import { DataService } from './service/dataService/data.service';
import { HttpModule } from '@angular/http';
import { DisplayDataComponent } from './display/display.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { SignInComponent } from './SignIn/signIn.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes} from '@angular/router';

const newRoutes: Routes  = [
  { path: '', component: SignInComponent },
  { path: 'login', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    FormDataComponent,
    DisplayDataComponent,
    SignInComponent,
    LoginComponent

  ],
  imports: [
    RouterModule.forRoot(newRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
