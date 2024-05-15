import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NuevaPublicacionComponent } from './nueva-publicacion.component';

describe('NuevaPublicacionComponent', () => {
  let component: NuevaPublicacionComponent;
  let fixture: ComponentFixture<NuevaPublicacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NuevaPublicacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NuevaPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
