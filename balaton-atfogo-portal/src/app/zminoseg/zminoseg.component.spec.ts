import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZminosegComponent } from './zminoseg.component';

describe('ZminosegComponent', () => {
  let component: ZminosegComponent;
  let fixture: ComponentFixture<ZminosegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZminosegComponent]
    });
    fixture = TestBed.createComponent(ZminosegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
