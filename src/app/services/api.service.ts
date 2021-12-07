import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  Articles: Array<number> | undefined;

  baseUrl = "https://hacker-news.firebaseio.com/v0/"

  constructor( private clientHttp: HttpClient) {
    
   }

  getArticles(){
    return this.clientHttp.get<any>(`${this.baseUrl}topstories.json`);
  }

  getArticle(id: number): Observable<Article>{
    return this.clientHttp.get<any>(`${this.baseUrl}item/${id}.json`);
  }
}