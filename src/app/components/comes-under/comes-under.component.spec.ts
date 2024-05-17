import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComesUnderComponent } from './comes-under.component';

describe('ComesUnderComponent', () => {
  let component: ComesUnderComponent;
  let fixture: ComponentFixture<ComesUnderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComesUnderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComesUnderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
