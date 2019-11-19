import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../book';
import {BookService} from "../book.service";

@Component({
  selector: 'app-a-book',
  templateUrl: './a-book.component.html',
  styleUrls: ['./a-book.component.css']
})
export class ABookComponent implements OnInit {
  id: number;
  book: Book;
  constructor(private  activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.bookService.getABook(this.id).subscribe( result => {
        this.book = result;
      });
    });
  }

}
