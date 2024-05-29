import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiaoazulComponent } from './meiaoazul.component';

describe('MeiaoazulComponent', () => {
  let component: MeiaoazulComponent;
  let fixture: ComponentFixture<MeiaoazulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeiaoazulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeiaoazulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
