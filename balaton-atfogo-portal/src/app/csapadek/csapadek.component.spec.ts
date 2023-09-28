import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsapadekComponent } from './csapadek.component';

describe('CsapadekComponent', () => {
  let component: CsapadekComponent;
  let fixture: ComponentFixture<CsapadekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CsapadekComponent]
    });
    fixture = TestBed.createComponent(CsapadekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
