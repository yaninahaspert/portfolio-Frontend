import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosProyectosComponent } from './formularios-proyectos.component';

describe('FormulariosProyectosComponent', () => {
  let component: FormulariosProyectosComponent;
  let fixture: ComponentFixture<FormulariosProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariosProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
