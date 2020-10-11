import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  apiKey = '1848b5465b1449d78d10c2991b1bea98';
  constructor(private http: HttpClient) {}
  getNews() {
    return this.http.get(
      'https://newsapi.org/v2/everything?q=bitcoin&amp%3Bfrom=2020-03-25&amp%3BsortBy=publishedAt&amp%3B&apiKey=' +
        this.apiKey
    );
  }
}
