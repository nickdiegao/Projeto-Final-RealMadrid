import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2011Component } from './camisa-real-2011.component';

describe('CamisaReal2011Component', () => {
  let component: CamisaReal2011Component;
  let fixture: ComponentFixture<CamisaReal2011Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2011Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
