import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajuste } from './ajuste';

describe('Ajuste', () => {
  let component: Ajuste;
  let fixture: ComponentFixture<Ajuste>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ajuste],
    }).compileComponents();

    fixture = TestBed.createComponent(Ajuste);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
