import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, identity } from 'rxjs';
import { Book } from '../shared-objects/books-objects';
@Injectable({
  providedIn: 'root'
})
export class BooksManagmentService {
  url = 'https://www.googleapis.com/books/v1/volumes?q=';
  maxInPage = 20;
  map = new Map<string, Book>();
  constructor(private http: HttpClient) { }
  getBooksWithVolum(q: string, page: number = 0): Observable<any> {
    return this.http.get(this.url + q + '&maxResults=' + this.maxpage + '&startIndex=' + (page * this.maxpage));
  }
  get maxpage() {
    return this.maxInPage;
  }
  addToCart(book: Book){
    this.map.set(book.id, book);
  }
  removeBook(id: string) {
    this.map.delete(id);
  }
  getBook(id): Book {
    return this.map.get(id);
  }
  getIdsOfCart(): string[] {
    return [ ...this.map.keys() ];
  }
}
