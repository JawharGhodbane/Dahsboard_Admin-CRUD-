import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddunivComponent } from './adduniv.component';

describe('AddunivComponent', () => {
  let component: AddunivComponent;
  let fixture: ComponentFixture<AddunivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddunivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddunivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
