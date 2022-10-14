import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftSkillAdmComponent } from './soft-skill-adm.component';

describe('SoftSkillAdmComponent', () => {
  let component: SoftSkillAdmComponent;
  let fixture: ComponentFixture<SoftSkillAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftSkillAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftSkillAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
