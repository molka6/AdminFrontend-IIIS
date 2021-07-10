import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IlefServicesComponent } from './ilef-services.component';

describe('IlefServicesComponent', () => {
  let component: IlefServicesComponent;
  let fixture: ComponentFixture<IlefServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IlefServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IlefServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
