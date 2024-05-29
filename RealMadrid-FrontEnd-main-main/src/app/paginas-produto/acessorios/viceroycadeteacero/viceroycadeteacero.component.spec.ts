import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceroycadeteaceroComponent } from './viceroycadeteacero.component';

describe('ViceroycadeteaceroComponent', () => {
  let component: ViceroycadeteaceroComponent;
  let fixture: ComponentFixture<ViceroycadeteaceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViceroycadeteaceroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViceroycadeteaceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
