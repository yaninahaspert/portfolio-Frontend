import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiosAdmComponent } from './estudios-adm.component';

describe('EstudiosAdmComponent', () => {
  let component: EstudiosAdmComponent;
  let fixture: ComponentFixture<EstudiosAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiosAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
