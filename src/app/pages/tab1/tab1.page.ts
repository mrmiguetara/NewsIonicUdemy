import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  news: Article[] = [];

  constructor( private newsService: NewsService) {}

  ngOnInit() {
    this.loadNews()
  }

  loadData(event) {
    this.loadNews(event)
  }

  loadNews( event? ) {
    this.newsService.getTopHeadlines().subscribe(
      newsResponse => {

        if (event) {
          event.target.complete()
          if (newsResponse.articles.length === 0) {
            event.target.disabled = true;
            return;
          }
        }
        this.news.push(...newsResponse.articles);
        console.log(this.news);
      }
    );
  }

  openUrl( url: string) {
    open(url);
  }

}
