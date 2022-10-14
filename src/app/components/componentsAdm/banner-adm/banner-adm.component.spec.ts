import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerAdmComponent } from './banner-adm.component';

describe('BannerAdmComponent', () => {
  let component: BannerAdmComponent;
  let fixture: ComponentFixture<BannerAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
