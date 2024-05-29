import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceroycadeteazulComponent } from './viceroycadeteazul.component';

describe('ViceroycadeteazulComponent', () => {
  let component: ViceroycadeteazulComponent;
  let fixture: ComponentFixture<ViceroycadeteazulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViceroycadeteazulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViceroycadeteazulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
