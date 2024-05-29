import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeiaocinzaComponent } from './meiaocinza.component';

describe('MeiaocinzaComponent', () => {
  let component: MeiaocinzaComponent;
  let fixture: ComponentFixture<MeiaocinzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeiaocinzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeiaocinzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
