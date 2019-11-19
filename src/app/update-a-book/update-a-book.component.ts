import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-update-a-book',
  templateUrl: './update-a-book.component.html',
  styleUrls: ['./update-a-book.component.css']
})
export class UpdateABookComponent implements OnInit, OnDestroy {
  //  public book: Book;
  // constructor(
  //   public bookService: BookService,
  //   public routerService: Router,
  //   public activateRouteService: ActivatedRoute
  // ) { }
  //
  // ngOnInit() {
  //   this.book = new Book();
  //   this.loadData();
  // }
  // loadData() {
  //   this.activateRouteService.params.subscribe((data: Params) => {
  //     const id = data.id;
  //     this.bookService.getABook(id).subscribe((book: Book) => {
  //       this.book = book;
  //     });
  //   });
  // }
  // onEditBook() {
  //   this.bookService.updateABook(this.book).subscribe((data: Book) => {
  //     this.bookService.navigateByUrl('books');
  //   });
  // }
  isSuccess = false;
  public subscription: Subscription;
  public book: Book;
  public subscriptionParams: Subscription;

  constructor(
    public bookService: BookService,
    public routerService: Router,
    public activateRouteService: ActivatedRoute
  ) { }

  ngOnInit() {
    this.book = new Book();
    this.loadData();
  }
  loadData() {
    this.subscriptionParams = this.activateRouteService.params.subscribe(data  => {
      const i = data.id;
      this.subscription = this.bookService.getABook(i).subscribe((book: Book) => {
        this.book = book;
      });
    });
  }
  onEditBook() {
    this.subscription = this.bookService.updateABook(this.book).subscribe(data => {
      this.routerService.navigateByUrl('books');
      this.isSuccess = true;
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    if (this.subscriptionParams) {
      this.subscriptionParams.unsubscribe();
    }
  }

}
