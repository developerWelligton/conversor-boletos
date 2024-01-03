import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivePdfComponent } from './receive-pdf.component';

describe('ReceivePdfComponent', () => {
  let component: ReceivePdfComponent;
  let fixture: ComponentFixture<ReceivePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceivePdfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceivePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
