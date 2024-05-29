import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meiaobranco23Component } from './meiaobranco23.component';

describe('Meiaobranco23Component', () => {
  let component: Meiaobranco23Component;
  let fixture: ComponentFixture<Meiaobranco23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Meiaobranco23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Meiaobranco23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
