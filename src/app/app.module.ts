import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { ListUserComponent } from './list-user/list-user.component';


@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListUserComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    ListUserComponent,]
})
export class AppModule { }
