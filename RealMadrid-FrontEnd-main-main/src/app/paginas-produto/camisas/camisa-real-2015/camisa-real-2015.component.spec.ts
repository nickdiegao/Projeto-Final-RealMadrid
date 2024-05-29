import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2015Component } from './camisa-real-2015.component';

describe('CamisaReal2015Component', () => {
  let component: CamisaReal2015Component;
  let fixture: ComponentFixture<CamisaReal2015Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2015Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
