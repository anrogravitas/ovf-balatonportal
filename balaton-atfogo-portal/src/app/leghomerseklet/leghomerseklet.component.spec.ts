import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeghomersekletComponent } from './leghomerseklet.component';

describe('LeghomersekletComponent', () => {
  let component: LeghomersekletComponent;
  let fixture: ComponentFixture<LeghomersekletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeghomersekletComponent]
    });
    fixture = TestBed.createComponent(LeghomersekletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
