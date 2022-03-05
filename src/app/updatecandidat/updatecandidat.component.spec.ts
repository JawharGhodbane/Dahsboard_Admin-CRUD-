import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecandidatComponent } from './updatecandidat.component';

describe('UpdatecandidatComponent', () => {
  let component: UpdatecandidatComponent;
  let fixture: ComponentFixture<UpdatecandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
