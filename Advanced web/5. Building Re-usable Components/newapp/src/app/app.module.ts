import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TestcomComponent } from './testcom/testcom.component';
import { StudentComponent } from './studentList/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { MovieComponent } from './movie/movie.component';
import { MovieitemComponent } from './movieitem/movieitem.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TestcomComponent,
    StudentComponent,
    StudentdetailsComponent,
    MovieComponent,
    MovieitemComponent,
    WatchlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
