import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from '../models/news.model';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<News[]> {
    let url = 'https://social.runwayclub.dev/api/articles/latest';
    return this.httpClient.get<News[]>(url).pipe();
  }
}
