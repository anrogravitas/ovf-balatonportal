import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizmertekComponent } from './vizmertek.component';

describe('VizmertekComponent', () => {
  let component: VizmertekComponent;
  let fixture: ComponentFixture<VizmertekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VizmertekComponent]
    });
    fixture = TestBed.createComponent(VizmertekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
