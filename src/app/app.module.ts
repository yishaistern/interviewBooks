import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ToastrModule } from 'ngx-toastr';
import { UserManagmentService } from './services/user-managment.service';
import { BooksManagmentService } from './services/books-managment.service';
import { BookComponent } from './components/book/book.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    WishlistComponent,
    BookComponent,
    BookInfoComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserManagmentService, BooksManagmentService],
  bootstrap: [AppComponent],
  entryComponents: [
    BookInfoComponent
  ]
})
export class AppModule { }
