import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MochilaRealMadridComponent } from './mochila-real-madrid.component';

describe('MochilaRealMadridComponent', () => {
  let component: MochilaRealMadridComponent;
  let fixture: ComponentFixture<MochilaRealMadridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MochilaRealMadridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MochilaRealMadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
