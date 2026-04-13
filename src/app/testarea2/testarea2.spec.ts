import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testarea2 } from './testarea2';

describe('Testarea2', () => {
  let component: Testarea2;
  let fixture: ComponentFixture<Testarea2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testarea2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Testarea2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
