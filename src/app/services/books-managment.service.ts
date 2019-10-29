import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../shared-objects/books-objects';
@Injectable({
  providedIn: 'root'
})
export class BooksManagmentService {
  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  maxInPage = 20;
  constructor(private http: HttpClient) { }
  getBooksWithVolum(q: string, page: number = 0): Observable<any> {
    return this.http.get(this.url + q + '&maxResults=' + this.maxpage + '&startIndex=' + (page * this.maxpage));
  }
  get maxpage() {
    return this.maxInPage;
  }
}
