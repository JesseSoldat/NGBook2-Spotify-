import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/SearchComponent';
import { AlbumComponent } from './components/AlbumComponent';
import { TrackComponent } from './components/TrackComponent';
import { ArtistComponent } from './components/ArtistComponent';

import { SPOTIFY_PROVIDERS } from './services/SpotifyService';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'artist/:id', component: ArtistComponent }
];

@NgModule({
  declarations: [ 
    AppComponent,
    SearchComponent,
    AlbumComponent,
    TrackComponent,
    ArtistComponent
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
