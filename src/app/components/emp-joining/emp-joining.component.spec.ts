import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpJoiningComponent } from './emp-joining.component';

describe('EmpJoiningComponent', () => {
  let component: EmpJoiningComponent;
  let fixture: ComponentFixture<EmpJoiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpJoiningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
