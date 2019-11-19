import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateABookComponent } from './update-a-book.component';

describe('UpdateABookComponent', () => {
  let component: UpdateABookComponent;
  let fixture: ComponentFixture<UpdateABookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateABookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateABookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
