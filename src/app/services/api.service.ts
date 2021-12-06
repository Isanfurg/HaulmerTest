import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //Api url more info:  https://github.com/HackerNews/API
  public baseURL = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }
  
  /**
   * GET: TOP ARTICLES FROM API
   */
  getArticles(): Observable<any> {
    const url = this.baseURL+"/beststories.json";
    return this.http.get<any>(url);
  }

  /**
   * GET: GET ARTICLE INFO FROM ID
   * @param id - ID ARTICLE
   */
  getArticle(id: number): Observable<any> {
    const url = `${this.baseURL}/item/${id}.json`;
    return this.http.get<any>(url);
  }
  
}
