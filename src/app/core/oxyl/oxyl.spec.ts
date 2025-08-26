import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Oxyl } from './oxyl';

describe('Oxyl', () => {
  let component: Oxyl;
  let fixture: ComponentFixture<Oxyl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oxyl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Oxyl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
