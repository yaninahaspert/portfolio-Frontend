import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperieniaAdmComponent } from './experienia-adm.component';

describe('ExperieniaAdmComponent', () => {
  let component: ExperieniaAdmComponent;
  let fixture: ComponentFixture<ExperieniaAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperieniaAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperieniaAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
