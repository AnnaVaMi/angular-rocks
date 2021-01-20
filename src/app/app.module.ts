import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter-pipe.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BandsComponent } from './bands/bands.component';
import { BandListComponent } from './bands/band-list/band-list.component';
import { BandDetailComponent } from './bands/band-detail/band-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BandsComponent,
    BandListComponent,
    BandDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
