import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosAdmComponent } from './proyectos-adm.component';

describe('ProyectosAdmComponent', () => {
  let component: ProyectosAdmComponent;
  let fixture: ComponentFixture<ProyectosAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
