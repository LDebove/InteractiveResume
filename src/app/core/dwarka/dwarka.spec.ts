import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dwarka } from './dwarka';

describe('Dwarka', () => {
  let component: Dwarka;
  let fixture: ComponentFixture<Dwarka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dwarka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dwarka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
