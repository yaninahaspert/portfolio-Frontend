import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHardComponent } from './formulario-hard.component';

describe('FormularioHardComponent', () => {
  let component: FormularioHardComponent;
  let fixture: ComponentFixture<FormularioHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
