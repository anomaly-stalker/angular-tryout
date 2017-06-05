import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    WeatherComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
