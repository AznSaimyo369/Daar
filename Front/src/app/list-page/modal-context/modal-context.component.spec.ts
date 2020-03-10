import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContextComponent } from './modal-context.component';

describe('ModalContextComponent', () => {
  let component: ModalContextComponent;
  let fixture: ComponentFixture<ModalContextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalContextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
