import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../shared-objects/books-objects';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookInfoComponent } from '../book-info/book-info.component';
import { BooksManagmentService } from '../../services/books-managment.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() isCart: boolean;
  @Output() remove = new EventEmitter();
  constructor(public dialog: MatDialog, private bookManage: BooksManagmentService) { }

  ngOnInit() {
    console.log(this.book);
  }
  getTitle() {
    return (this.book && this.book.volumeInfo && this.book.volumeInfo.title) ? this.book.volumeInfo.title : '';
  }
  openDialod() {
    const dialogRef = this.dialog.open(BookInfoComponent, {
      width: '300px',
      data: {book: this.book}
    });
  }
  addToCart() {
    this.bookManage.addToCart(this.book);
  }
  removeBook() {
    this.bookManage.removeBook(this.book.id);
    this.remove.emit(this.book.id);
  }
}
