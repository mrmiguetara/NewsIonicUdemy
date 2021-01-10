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

  headlinesPage = 0;

  currentCategory = '';
  categoryPage = 0;
  
  constructor( private http: HttpClient) { }

  private executeQuery<T>( query: string) {
    const url = `${apiDomain}/${query}`;

    return this.http.get<T>(url, {headers});
  }

  getTopHeadlines() {
    this.headlinesPage++
    return this.executeQuery<NewsResponse>(`top-headlines?country=us&page=${this.headlinesPage}`);
  }

  getTopHeadlinesByCategory( category: string) {
    if (category === this.currentCategory) {
      this.categoryPage++
    } else {
      this.currentCategory = category;
      this.categoryPage = 1;
    }
    return this.executeQuery<NewsResponse>(`top-headlines?country=us&category=${category}&page=${this.categoryPage}`);
  }
}
