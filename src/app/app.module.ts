import { LoadingspinnerComponent } from './components/loadingspinner/loadingspinner.component';
import { PortfolioVIewComponent } from './components/PortfolioVIew/PortfolioVIew.component';
import { AboutComponent } from './components/About/About.component';
import { PortfolioComponent } from './components/Portfolio/Portfolio.component';
import { GallerieComponent } from './components/Gallerie/Gallerie.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GallerieComponent,
    PortfolioComponent,
    AboutComponent,
    PortfolioVIewComponent,
    LoadingspinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
