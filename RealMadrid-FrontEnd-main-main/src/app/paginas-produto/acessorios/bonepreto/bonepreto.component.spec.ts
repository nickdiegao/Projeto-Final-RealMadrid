import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonepretoComponent } from './bonepreto.component';

describe('BonepretoComponent', () => {
  let component: BonepretoComponent;
  let fixture: ComponentFixture<BonepretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BonepretoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonepretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
