import { Component, OnInit } from '@angular/core';
import { UserManagmentService } from '../../services/user-managment.service';
import { BooksManagmentService } from '../../services/books-managment.service';
import { Book } from 'src/app/shared-objects/books-objects';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userNmae: string;
  books: Book[] = [];
  num = 0;
  query = '';
  maxPages = 0;
  constructor(
    private userManage: UserManagmentService,
    private bookManage: BooksManagmentService
  ) { }

  ngOnInit() {
    this.userNmae = this.userManage.getUserName();
  }

  changePage(num: number) {
    const current = this.num + num;
  }
  searchBooks($event): void {
    this.query = $event.target.value;
    this.num = 0;
    if (this.query) {
     this.getbooks().subscribe((data) => {
      console.log(data);
      const totatl = data.totalItems;
      if (totatl % this.bookManage.maxpage === 0) {
        this.maxPages = totatl / this.bookManage.maxpage;
      } else {
        this.maxPages = Math.floor(totatl / this.bookManage.maxpage) + 1;
      }
     });
    } else {
      this.books = [];
    }
  }
  getbooks(): Observable<any> {
      return this.bookManage.getBooksWithVolum(this.query, this.num).pipe(
        map((data) => {
          console.log(data);
          this.books = data.items;
          return data;
        })
      );
  }

}
