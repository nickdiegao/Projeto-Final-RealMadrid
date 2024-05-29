import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaRealMadridComponent } from './cama-real-madrid.component';

describe('CamaRealMadridComponent', () => {
  let component: CamaRealMadridComponent;
  let fixture: ComponentFixture<CamaRealMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamaRealMadridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamaRealMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
