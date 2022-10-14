import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercademiAdmComponent } from './acercademi-adm.component';

describe('AcercademiAdmComponent', () => {
  let component: AcercademiAdmComponent;
  let fixture: ComponentFixture<AcercademiAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercademiAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercademiAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
