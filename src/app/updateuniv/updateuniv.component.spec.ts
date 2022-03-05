import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateunivComponent } from './updateuniv.component';

describe('UpdateunivComponent', () => {
  let component: UpdateunivComponent;
  let fixture: ComponentFixture<UpdateunivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateunivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateunivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
