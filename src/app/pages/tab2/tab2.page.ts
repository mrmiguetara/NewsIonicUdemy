import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  news: Article[] = [];

  categories = [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology',
  ];

  constructor( private newsService: NewsService) {}

  ngOnInit() {
    this.loadHeadlines( this.categories[0] );
  }

  getHeadlines( event ) {
    const category = event.detail.value;

    this.news = [];

    this.loadHeadlines(category);
  }

  private loadHeadlines( category: string) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(
      response => {
        this.news.push( ...response.articles );
      }
    );
  }

}
