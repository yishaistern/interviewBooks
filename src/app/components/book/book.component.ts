import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../shared-objects/books-objects';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BookInfoComponent } from '../book-info/book-info.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() book: Book;
  @Input() isCart: boolean;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.book);
  }
  getTitle() {
    return (this.book && this.book.volumeInfo && this.book.volumeInfo.title) ? this.book.volumeInfo.title : '';
  }
  openDialod() {
    const dialogRef = this.dialog.open(BookInfoComponent, {
      width: '250px',
      data: {bok: this.book}
    });
  }
}
