import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieShowComponent } from './movie-show.component';

describe('MovieShowComponent', () => {
  let component: MovieShowComponent;
  let fixture: ComponentFixture<MovieShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
