import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2012Component } from './camisa-real-2012.component';

describe('CamisaReal2012Component', () => {
  let component: CamisaReal2012Component;
  let fixture: ComponentFixture<CamisaReal2012Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2012Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
