import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { IndexComponent } from './index/index.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CharacterCreatorComponent } from './character-creator/character-creator.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterInfoComponent } from './character-info/character-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'index', component: IndexComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'createCharacter', component: CharacterCreatorComponent},
  {path: 'character-list', component: CharacterListComponent},
  {path: 'character-info', component: CharacterInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
