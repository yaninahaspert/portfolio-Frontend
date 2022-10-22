import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSoftComponent } from './formulario-soft.component';

describe('FormularioSoftComponent', () => {
  let component: FormularioSoftComponent;
  let fixture: ComponentFixture<FormularioSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
