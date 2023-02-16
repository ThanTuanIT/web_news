import { Component } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
  constructor(public newsService: NewsService) {} //tiêm

  news: News[] = [];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.newsService.get().subscribe((data: any) => (this.news = data));
  }
}
