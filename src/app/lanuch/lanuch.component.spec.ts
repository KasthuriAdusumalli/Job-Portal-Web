import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanuchComponent } from './lanuch.component';

describe('LanuchComponent', () => {
  let component: LanuchComponent;
  let fixture: ComponentFixture<LanuchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanuchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
