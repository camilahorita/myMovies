import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should insert the Title, Image, Language, Description, Release date and Genre', () => {
    component.movie = { Title: "New title", Released: "August 2020", Genre: "Action", Language: "Spanish", Year: "2020", imdbID: "1", Poster: "Newphoto", Plot: "New plot" };

    const elementTitle = fixture.debugElement.query(By.css('#title'));
    const elementPhoto = fixture.debugElement.query(By.css('#image'));
    const elementDate = fixture.debugElement.query(By.css('#date'));
    const elementGenre = fixture.debugElement.query(By.css('#genre'));
    const elementLanguage = fixture.debugElement.query(By.css('#language'));
    const elementPlot = fixture.debugElement.query(By.css('#plot'));

    fixture.detectChanges();

    expect((elementTitle.nativeElement as HTMLSpanElement).textContent).toEqual(" New title ");
    expect(elementPhoto.nativeElement.src).toEqual("http://localhost:9876/Newphoto");
    expect((elementDate.nativeElement as HTMLSpanElement).textContent).toEqual(" Released date: August 2020");
    expect((elementGenre.nativeElement as HTMLSpanElement).textContent).toEqual(" Genre: Action");
    expect((elementLanguage.nativeElement as HTMLSpanElement).textContent).toEqual(" Language: Spanish");
    expect((elementPlot.nativeElement as HTMLSpanElement).textContent).toEqual(" New plot");

  });
});
