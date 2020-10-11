import { NewsService } from './../service/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsArticles: Array<any>;
  loading: boolean;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.newsService.getNews().subscribe((data) => {
      this.newsArticles = data['articles'];
      this.loading = false;
    });
  }
}
