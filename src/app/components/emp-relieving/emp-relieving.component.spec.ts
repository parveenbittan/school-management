import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRelievingComponent } from './emp-relieving.component';

describe('EmpRelievingComponent', () => {
  let component: EmpRelievingComponent;
  let fixture: ComponentFixture<EmpRelievingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpRelievingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpRelievingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
