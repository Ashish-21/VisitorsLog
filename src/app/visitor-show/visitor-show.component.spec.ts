import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorShowComponent } from './visitor-show.component';

describe('VisitorShowComponent', () => {
  let component: VisitorShowComponent;
  let fixture: ComponentFixture<VisitorShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
