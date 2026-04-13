import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testarea } from './testarea';

describe('Testarea', () => {
  let component: Testarea;
  let fixture: ComponentFixture<Testarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
