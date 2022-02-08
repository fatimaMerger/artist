import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutArtistComponent } from './about-artist/about-artist.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-artist', component:AboutArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
