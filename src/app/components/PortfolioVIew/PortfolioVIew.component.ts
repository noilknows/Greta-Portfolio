import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostService } from './../services/blog-post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-PortfolioVIew',
  templateUrl: './PortfolioVIew.component.html',
  styleUrls: ['./PortfolioVIew.component.scss']
})
export class PortfolioVIewComponent implements OnInit {
  images: any[];


  constructor( private _service : BlogPostService,private _http:HttpClientModule,private router:Router) { }

  ngOnInit() {
    this.loadImagesAndDescription()
  }
  loadImagesAndDescription(){
    this._service.getVideoData().subscribe((result:any[]) =>{
      this.images = result;
      sessionStorage.setItem('images', JSON.stringify(this.images));
    })
  }
  gotoSingleImage = (item) => {
    sessionStorage.setItem('item', JSON.stringify(item));
    this.router.navigate(['/image'])
  }
}
