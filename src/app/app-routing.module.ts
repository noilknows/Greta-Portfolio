import { ItemviewComponent } from './components/PortfolioVIew/itemview/itemview.component';
import { AboutComponent } from './components/About/About.component';
import { PortfolioComponent } from './components/Portfolio/Portfolio.component';
import { GallerieComponent } from './components/Gallerie/Gallerie.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'Portfolio', component: PortfolioComponent },
  { path: 'About', component: AboutComponent },
  { path: 'image', component:ItemviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
