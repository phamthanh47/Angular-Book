import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-a-book',
  templateUrl: './add-a-book.component.html',
  styleUrls: ['./add-a-book.component.css']
})
export class AddABookComponent implements OnInit {
  isSuccess = false;
  constructor(private bookSeervice: BookService) { }
  bookForm: FormGroup;

  ngOnInit() {
    this.bookForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl('')
    });
  }
    onSubmit() {
      const book = this.bookForm.value;
      this.bookSeervice.addABook(book).subscribe(result => {
        this.isSuccess = true;
      });
    }

}
