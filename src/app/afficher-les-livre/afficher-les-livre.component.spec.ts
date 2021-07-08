import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherLesLivreComponent } from './afficher-les-livre.component';

describe('AfficherLesLivreComponent', () => {
  let component: AfficherLesLivreComponent;
  let fixture: ComponentFixture<AfficherLesLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficherLesLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherLesLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
