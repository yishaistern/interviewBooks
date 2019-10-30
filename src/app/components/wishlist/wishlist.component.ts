import { Component, OnInit } from '@angular/core';
import { BooksManagmentService } from 'src/app/services/books-managment.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
ids: string[] = [];
  constructor(private bookManage: BooksManagmentService) { }

  getbook(id) {
    return this.bookManage.getBook(id);
  }
  
  ngOnInit() {
    this.ids = this.bookManage.getIdsOfCart();
  }

  removeFromList(id) {
    this.ids = this.ids.filter(item => (item !== id));
  }

}
