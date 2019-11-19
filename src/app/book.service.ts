import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  API_URL = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}
  getBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.API_URL + 'books');
  }
  getABook(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.API_URL}books/${id}`);
  }
  addABook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.API_URL + 'books', book );
  }
  updateABook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`${this.API_URL}books/${book.id}`, book);
  }
  deleteABook(id: number): Observable<Book> {
    return this.httpClient.delete<Book>(`${this.API_URL}books/${id}`);
  }
  Search(keyword: string): Observable<any> {
    return this.httpClient.get( `${this.API_URL}books/${keyword}`);
  }
}
