import { TestBed, async } from '@angular/core/testing';
import { StarRatingComponent } from './star-rating.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StarRatingComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(StarRatingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'star-rating'`, () => {
    const fixture = TestBed.createComponent(StarRatingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('star-rating');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(StarRatingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to star-rating!');
  });
});
