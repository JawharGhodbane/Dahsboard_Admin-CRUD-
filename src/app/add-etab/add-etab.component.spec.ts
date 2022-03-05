import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEtabComponent } from './add-etab.component';

describe('AddEtabComponent', () => {
  let component: AddEtabComponent;
  let fixture: ComponentFixture<AddEtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEtabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
