import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { Book } from '../../shared-objects/books-objects';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BookInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  book: Book;
  thumb: string;
  pages: number;
  publishedDate: string;
  title: string;
  authers: string[] = [];
  ngOnInit() {
    this.book = this.data.book;
    this.thumb = this.book.volumeInfo.imageLinks ? this.book.volumeInfo.imageLinks.smallThumbnail : '';
    this.pages = this.book.volumeInfo.pageCount;
    this.publishedDate = this.book.volumeInfo.publishedDate;
    this.title = this.book.volumeInfo.title;
    this.authers = (this.book.volumeInfo.authors) ? this.book.volumeInfo.authors : [];
  }
  close() {
    this.dialogRef.close();
  }

}
