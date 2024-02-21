import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiempleadosComponent } from './liempleados.component';

describe('LiempleadosComponent', () => {
  let component: LiempleadosComponent;
  let fixture: ComponentFixture<LiempleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiempleadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiempleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
