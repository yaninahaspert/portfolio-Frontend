import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsHardComponent } from './skills-hard.component';

describe('SkillsHardComponent', () => {
  let component: SkillsHardComponent;
  let fixture: ComponentFixture<SkillsHardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsHardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsHardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
