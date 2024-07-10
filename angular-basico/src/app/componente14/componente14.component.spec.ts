import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Componente14Component } from './componente14.component';

describe('Componente14Component', () => {
  let component: Componente14Component;
  let fixture: ComponentFixture<Componente14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Componente14Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Componente14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
