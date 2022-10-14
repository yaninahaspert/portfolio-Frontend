import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSkillAdmComponent } from './hard-skill-adm.component';

describe('HardSkillAdmComponent', () => {
  let component: HardSkillAdmComponent;
  let fixture: ComponentFixture<HardSkillAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSkillAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardSkillAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
