import { GallerieComponent } from './../Gallerie/Gallerie.component';
import { Router } from '@angular/router';
import { AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { IfStmt } from '@angular/compiler';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterViewInit {

  isShown: boolean;
  count: number;

  constructor(private router: Router) { }

  ngAfterViewInit()
  {
      this.isShown = true;
      // this.CheckBool();
      this.router.navigateByUrl('#');
    // else if
    // (this.isShown === false){
    //   this.isShown = false;
    // }

  }
  GoToAbout(){
    this.isShown = false;
  }
  GoToMain(){
    this.isShown = true;
  }
  CheckBool(){
    this.count = 1;
    if(this.isShown === true){
      this.isShown = false;
    }
  }

}
