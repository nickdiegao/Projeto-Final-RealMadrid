import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViceroyhombreaceroComponent } from './viceroyhombreacero.component';

describe('ViceroyhombreaceroComponent', () => {
  let component: ViceroyhombreaceroComponent;
  let fixture: ComponentFixture<ViceroyhombreaceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViceroyhombreaceroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViceroyhombreaceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
