import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2009Component } from './camisa-real-2009.component';

describe('CamisaReal2009Component', () => {
  let component: CamisaReal2009Component;
  let fixture: ComponentFixture<CamisaReal2009Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2009Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
