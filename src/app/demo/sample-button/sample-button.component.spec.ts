import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleButtonComponent } from './sample-button.component';

describe('SampleButtonComponent', () => {
  let component: SampleButtonComponent;
  let fixture: ComponentFixture<SampleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
