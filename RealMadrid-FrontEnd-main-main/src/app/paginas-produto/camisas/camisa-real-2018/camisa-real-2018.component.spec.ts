import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamisaReal2018Component } from './camisa-real-2018.component';

describe('CamisaReal2018Component', () => {
  let component: CamisaReal2018Component;
  let fixture: ComponentFixture<CamisaReal2018Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CamisaReal2018Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamisaReal2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
