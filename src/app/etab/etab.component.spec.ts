import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtabComponent } from './etab.component';

describe('EtabComponent', () => {
  let component: EtabComponent;
  let fixture: ComponentFixture<EtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
