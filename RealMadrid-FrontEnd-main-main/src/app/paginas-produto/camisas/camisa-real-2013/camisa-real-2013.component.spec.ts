import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2013Component } from './camisa-real-2013.component';

describe('CamisaReal2013Component', () => {
  let component: CamisaReal2013Component;
  let fixture: ComponentFixture<CamisaReal2013Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2013Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2013Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
