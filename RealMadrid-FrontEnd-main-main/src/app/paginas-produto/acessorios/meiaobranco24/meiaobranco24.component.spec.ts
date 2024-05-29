import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meiaobranco24Component } from './meiaobranco24.component';

describe('Meiaobranco24Component', () => {
  let component: Meiaobranco24Component;
  let fixture: ComponentFixture<Meiaobranco24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Meiaobranco24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Meiaobranco24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
