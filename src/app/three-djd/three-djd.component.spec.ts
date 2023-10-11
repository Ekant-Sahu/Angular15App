import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDjdComponent } from './three-djd.component';

describe('ThreeDjdComponent', () => {
  let component: ThreeDjdComponent;
  let fixture: ComponentFixture<ThreeDjdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeDjdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeDjdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
