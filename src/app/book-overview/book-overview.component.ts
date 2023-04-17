import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.css']
})
export class BookOverviewComponent {
  firstBook = { author:'John Example', title: 'Angular in a nutshell' };
  secondBook = { author:'Another Example', title: 'Some title' };
  selectedBook: Book | null = null;

  books = [this.firstBook, this.secondBook, null];
  rentedBook: Book|null = null;

  selectBook(book:Book):void {
    this.selectedBook = book;
  }

  rentBook(book: Book | null) {
    this.rentedBook = book;
    debugger;
    console.log(this.rentedBook);
    
  }
}
