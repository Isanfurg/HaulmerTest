import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  stories: Array<number>;

  baseUrl = "https://hacker-news.firebaseio.com/v0/"

  constructor( private clientHttp: HttpClient) {
    
   }

  getTopStories(){
    return this.clientHttp.get<any>(`${this.baseUrl}topstories.json`);
  }

  getStory(id: number): Observable<Story>{
    return this.clientHttp.get<any>(`${this.baseUrl}item/${id}.json`);
  }
}