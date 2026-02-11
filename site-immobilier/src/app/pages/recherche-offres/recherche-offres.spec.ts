import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheOffres } from './recherche-offres';

describe('RechercheOffres', () => {
  let component: RechercheOffres;
  let fixture: ComponentFixture<RechercheOffres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RechercheOffres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheOffres);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
