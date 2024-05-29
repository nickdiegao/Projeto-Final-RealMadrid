import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2017Component } from './camisa-real-2017.component';

describe('CamisaReal2017Component', () => {
  let component: CamisaReal2017Component;
  let fixture: ComponentFixture<CamisaReal2017Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2017Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2017Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
