import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiaobrancoComponent } from './meiaobranco.component';

describe('MeiaobrancoComponent', () => {
  let component: MeiaobrancoComponent;
  let fixture: ComponentFixture<MeiaobrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeiaobrancoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeiaobrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
