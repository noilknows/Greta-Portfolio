import { HeaderComponent } from './../header/header.component';
import { GallerieComponent } from './../Gallerie/Gallerie.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Portfolio',
  templateUrl: './Portfolio.component.html',
  styleUrls: ['./Portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  videoObj: any;
  videoPlaylist;
  Bool: HeaderComponent;

  constructor(){

  }

  ngOnInit() {
    // this._blogPostService.getVideoData().subscribe((resultFromApi : any[]) => {
    //   this.videoPlaylist = resultFromApi;
    //   console.log(this.videoPlaylist);
    // })
  }

  public BoolManager(){
    this.Bool.isShown = false;
    return this.Bool.isShown;
  }


}
