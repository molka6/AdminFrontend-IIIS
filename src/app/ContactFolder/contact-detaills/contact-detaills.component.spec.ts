import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDetaillsComponent } from './contact-detaills.component';

describe('ContactDetaillsComponent', () => {
  let component: ContactDetaillsComponent;
  let fixture: ComponentFixture<ContactDetaillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactDetaillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
