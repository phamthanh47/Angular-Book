import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteABookComponent } from './delete-a-book.component';

describe('DeleteABookComponent', () => {
  let component: DeleteABookComponent;
  let fixture: ComponentFixture<DeleteABookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteABookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
