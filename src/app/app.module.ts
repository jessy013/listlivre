import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherLesLivreComponent } from './afficher-les-livre/afficher-les-livre.component';
import { AfficherLivreComponent } from './afficher-livre/afficher-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherLesLivreComponent,
    AfficherLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
