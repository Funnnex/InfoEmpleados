import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrempleadosComponent } from './crempleados.component';

describe('CrempleadosComponent', () => {
  let component: CrempleadosComponent;
  let fixture: ComponentFixture<CrempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrempleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
