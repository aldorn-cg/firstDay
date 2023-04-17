import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-book-entry',
  templateUrl: './book-entry.component.html',
  styleUrls: ['./book-entry.component.css']
})
export class BookEntryComponent {
  @Input() book: Book | null = null;
  @Output() selectBook = new EventEmitter<Book | null>();

  onSelectBtnClick(): void {
    this.selectBook.emit(this.book);
  }
}
