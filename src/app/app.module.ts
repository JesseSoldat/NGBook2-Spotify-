import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/SearchComponent';

import { SPOTIFY_PROVIDERS } from './services/SpotifyService';

const routes: Routes = [
  { path: '', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SPOTIFY_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
