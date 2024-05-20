import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BdatosComponent } from './bdatos.component';

describe('BdatosComponent', () => {
  let component: BdatosComponent;
  let fixture: ComponentFixture<BdatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BdatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BdatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
