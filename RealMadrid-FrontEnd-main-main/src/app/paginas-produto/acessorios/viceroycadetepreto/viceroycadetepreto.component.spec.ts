import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceroycadetepretoComponent } from './viceroycadetepreto.component';

describe('ViceroycadetepretoComponent', () => {
  let component: ViceroycadetepretoComponent;
  let fixture: ComponentFixture<ViceroycadetepretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViceroycadetepretoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViceroycadetepretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
