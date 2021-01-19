import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BandsComponent } from './bands/bands.component';
import { BandListComponent } from './bands/band-list/band-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandsComponent,
    BandListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
