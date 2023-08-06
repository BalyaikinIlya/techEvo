import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StabPageComponent } from './stab-page.component';

describe('StabPageComponent', () => {
  let component: StabPageComponent;
  let fixture: ComponentFixture<StabPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StabPageComponent]
    });
    fixture = TestBed.createComponent(StabPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
