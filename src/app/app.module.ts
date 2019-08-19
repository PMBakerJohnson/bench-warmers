import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageServiceModule } from 'angular-webstorage-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { ApiConnectionService } from './api-connection.service';
import { FormsModule, FormGroup } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { UserService } from './user.service';
import { UserPageComponent } from './user-page/user-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CharacterListComponent,
    CharacterCreatorComponent,
    IndexComponent,
    UserPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    StorageServiceModule,
    FormsModule
=======
    FormsModule,
    StorageServiceModule
>>>>>>> f13a085ca478b867987d3f2defdec104b1f6b77e
  ],
  providers: [ApiConnectionService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
