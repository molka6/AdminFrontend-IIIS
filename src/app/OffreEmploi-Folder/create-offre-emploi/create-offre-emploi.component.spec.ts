import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOffreEmploiComponent } from './create-offre-emploi.component';

describe('CreateOffreEmploiComponent', () => {
  let component: CreateOffreEmploiComponent;
  let fixture: ComponentFixture<CreateOffreEmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOffreEmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOffreEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
