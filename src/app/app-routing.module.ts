import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeasonComponent } from './season/season.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'season/:seasonNumber', component: SeasonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
