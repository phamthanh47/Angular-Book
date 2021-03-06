import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddABookComponent } from './add-a-book.component';

describe('AddABookComponent', () => {
  let component: AddABookComponent;
  let fixture: ComponentFixture<AddABookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddABookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
