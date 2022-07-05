import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieboxComponent } from './moviebox.component';

describe('MovieboxComponent', () => {
  let component: MovieboxComponent;
  let fixture: ComponentFixture<MovieboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieboxComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should change the image and photo', () => {
    component.movies = [{Title:"New title",Released:"",Genre:"",Language:"", Year:"",imdbID:"1",Poster:"Newphoto",Plot:""}];
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('#title'));
    const elementPhoto = fixture.debugElement.query(By.css('#image'));

    expect((elementTitle.nativeElement as HTMLSpanElement).textContent).toEqual("New title");
    expect(elementPhoto.nativeElement.src).toEqual("http://localhost:9876/Newphoto");
  })

});
