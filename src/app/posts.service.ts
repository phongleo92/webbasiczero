import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor( private http: Http) { }

  //GET ALL POST FROM THE API
  getAllTest(){
    return this.http.get('/api/test')
    .map(res => res.json());
  }

  getAllOtherAPI(){
    return this.http.get('/api/otherapi')
    .map(res => res.json());
  }

}
