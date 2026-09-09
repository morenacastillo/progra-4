import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculos } from './calculos';

describe('Calculos', () => {
  let component: Calculos;
  let fixture: ComponentFixture<Calculos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculos],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
