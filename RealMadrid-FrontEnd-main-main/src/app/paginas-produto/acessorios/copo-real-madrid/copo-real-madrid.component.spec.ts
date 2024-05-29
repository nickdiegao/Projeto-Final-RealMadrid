import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopoRealMadridComponent } from './copo-real-madrid.component';

describe('CopoRealMadridComponent', () => {
  let component: CopoRealMadridComponent;
  let fixture: ComponentFixture<CopoRealMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopoRealMadridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopoRealMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
