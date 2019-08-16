import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http';
import {StorageServiceModule } from 'angular-webstorage-service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { ApiConnectionService } from './api-connection.service';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CharacterListComponent,
    CharacterCreatorComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [ApiConnectionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
