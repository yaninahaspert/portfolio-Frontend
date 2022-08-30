import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSoftComponent } from './skill-soft.component';

describe('SkillSoftComponent', () => {
  let component: SkillSoftComponent;
  let fixture: ComponentFixture<SkillSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
