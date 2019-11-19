import { Component, OnInit } from '@angular/core';
import {Book} from "../book";
import {BookService} from "../book.service";

@Component({
  selector: 'app-delete-a-book',
  templateUrl: './delete-a-book.component.html',
  styleUrls: ['./delete-a-book.component.css']
})
export class DeleteABookComponent implements OnInit {

  bookList: Book[];
  constructor(private bookService: BookService) { }
  ngOnInit() {
    this.bookService.getBookList().subscribe( result => {
      this.bookList = result;
    });
  }
  deleteBook(id) {
    this.bookService.deleteABook(id).subscribe(result => {
      alert('delete ok');
    });
  }

}
