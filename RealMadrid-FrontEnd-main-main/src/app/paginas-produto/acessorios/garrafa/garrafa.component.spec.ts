import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrafaComponent } from './garrafa.component';

describe('GarrafaComponent', () => {
  let component: GarrafaComponent;
  let fixture: ComponentFixture<GarrafaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GarrafaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GarrafaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
