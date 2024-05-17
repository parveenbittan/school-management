import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamClassComponent } from './exam-class.component';

describe('ExamClassComponent', () => {
  let component: ExamClassComponent;
  let fixture: ComponentFixture<ExamClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExamClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
