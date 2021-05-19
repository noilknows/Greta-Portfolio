import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-Gallerie',
  templateUrl: './Gallerie.component.html',
  styleUrls: ['./Gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  // isShown: boolean;
  Please: HeaderComponent;

  constructor() { }

  ngOnInit() {

  }
  GoToAbout(){

   }
   DisableGallerieWennAndereComponent(){
    this.Please.isShown = false;
    return this.Please.isShown;
   }

}
