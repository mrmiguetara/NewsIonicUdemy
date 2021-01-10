import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
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

  category: string;

  constructor( private newsService: NewsService) {}

  ngOnInit() {
    this.category = this.categories[0];
    this.loadHeadlines( this.categories[0] );
  }

  getHeadlines( event ) {
    this.category = event.detail.value;

    this.news = [];

    this.loadHeadlines(this.category);
  }

  private loadHeadlines( category: string, event?) {
    this.newsService.getTopHeadlinesByCategory(category).subscribe(
      response => {
        if (event) {
          if (response.articles.length === 0) {
            event.target.disabled = true;
            event.target.complete()
            return;
          }
          this.news.push( ...response.articles );
          event.target.complete()
        }
        else {
          this.news.push ( ...response.articles );
        }
      }
    );
  }

  loadData( event) {
    this.loadHeadlines(this.category, event)
  }

}
