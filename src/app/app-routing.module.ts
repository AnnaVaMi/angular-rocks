import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BandDetailComponent } from './bands/band-detail/band-detail.component';
import { BandListComponent } from './bands/band-list/band-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/bands', pathMatch: 'full' },
  { path: 'bands', component: BandListComponent },
  { path: 'detail/:id', component: BandDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
