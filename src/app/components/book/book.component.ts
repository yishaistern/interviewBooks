import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../shared-objects/books-objects';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() isCart: boolean;
  constructor() { }

  ngOnInit() {
    console.log(this.book);
  }

}
