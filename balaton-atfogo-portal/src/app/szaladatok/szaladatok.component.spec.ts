import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzaladatokComponent } from './szaladatok.component';

describe('SzaladatokComponent', () => {
  let component: SzaladatokComponent;
  let fixture: ComponentFixture<SzaladatokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SzaladatokComponent]
    });
    fixture = TestBed.createComponent(SzaladatokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
