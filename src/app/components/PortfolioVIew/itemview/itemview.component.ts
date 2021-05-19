import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';

@Component({
  selector: 'app-itemview',
  templateUrl: './itemview.component.html',
  styleUrls: ['./itemview.component.scss']
})
export class ItemviewComponent implements OnInit {
  videoObj: any;
  images;

  constructor(private _service : BlogPostService) {
    this.videoObj = JSON.parse(sessionStorage.getItem('item'));
    this.images = JSON.parse(sessionStorage.getItem('images'));
    console.log('videoObj', this.videoObj);
   }

  ngOnInit() {
    this._service.getVideoData().subscribe((result:any[]) => {
      this.images = result;
    })
  }

}
