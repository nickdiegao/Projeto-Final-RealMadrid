import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2010Component } from './camisa-real-2010.component';

describe('CamisaReal2010Component', () => {
  let component: CamisaReal2010Component;
  let fixture: ComponentFixture<CamisaReal2010Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2010Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2010Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
