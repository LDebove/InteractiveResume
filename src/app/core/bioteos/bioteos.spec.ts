import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bioteos } from './bioteos';

describe('Bioteos', () => {
  let component: Bioteos;
  let fixture: ComponentFixture<Bioteos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bioteos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bioteos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
