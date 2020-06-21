import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiKey = environment.apiKey;
const apiDomain = environment.apiDomain;

const headers = new HttpHeaders({
  'X-Api-Key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient) { }

  private executeQuery<T>( query: string) {
    const url = `${apiDomain}/${query}`;

    return this.http.get<T>(url, {headers});
  }

  getTopHeadlines() {
    return this.executeQuery<NewsResponse>('top-headlines?country=us');
  }

  getTopHeadlinesByCategory( category: string) {
    return this.executeQuery<NewsResponse>(`top-headlines?country=us&category=${category}`);
  }
}
