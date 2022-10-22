import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBannerComponent } from './formulario-banner.component';

describe('FormularioBannerComponent', () => {
  let component: FormularioBannerComponent;
  let fixture: ComponentFixture<FormularioBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
