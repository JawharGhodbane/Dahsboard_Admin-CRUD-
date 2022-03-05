import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtabComponent } from './update-etab.component';

describe('UpdateEtabComponent', () => {
  let component: UpdateEtabComponent;
  let fixture: ComponentFixture<UpdateEtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
