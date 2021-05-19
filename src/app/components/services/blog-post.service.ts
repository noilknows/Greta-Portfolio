import { BlogPost } from './../../models/BlogPost';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  private serviceUrl = "https://nodejsvideocrud.herokuapp.com/BlogPost";

  constructor(private http:HttpClient) {
    this.updateEmployee;
  }

  getVideoData(){
    return this.http.get(this.serviceUrl);
  }
  updateEmployee(id: number) {
    return this.http.put(`https://nodejsvideocrud.herokuapp.com/BlogPost`, id);
  }
}
