import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
    bookList: Book[];
    searchText;
  keyword: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookList().subscribe(result => {
      this.bookList = result;
    });
  }
  onDeleteCourse(id: number ) {
   this.bookService.deleteABook(id).subscribe((data: Book) => {
     this.updateDataAfterDelete(id);
   });
  }
  updateDataAfterDelete(id: number) {
    for (let i = 0; i < this.bookList.length; i++) {
      if (this.bookList[i].id === id ) {
          this.bookList.splice(i, 1);
          break;
      }
    }
  }
  Search() {
    this.bookService.Search(this.keyword).subscribe((response: any) => {
      this.bookList  = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
