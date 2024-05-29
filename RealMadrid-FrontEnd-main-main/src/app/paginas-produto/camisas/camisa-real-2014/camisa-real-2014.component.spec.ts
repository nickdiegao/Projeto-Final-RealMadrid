import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2014Component } from './camisa-real-2014.component';

describe('CamisaReal2014Component', () => {
  let component: CamisaReal2014Component;
  let fixture: ComponentFixture<CamisaReal2014Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2014Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2014Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
