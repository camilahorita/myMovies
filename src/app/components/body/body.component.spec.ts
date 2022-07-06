import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { BodyComponent } from './body.component';

describe('BodyComponent', () => {
  let component: BodyComponent
  let fixture: ComponentFixture<BodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BodyComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should change the image and photo', () => {
    component.movies = [{ Title: "New title", Released: "", Genre: "", Language: "", Year: "", imdbID: "1", Poster: "Newphoto", Plot: "" }];
    fixture.detectChanges();
    const elementTitle = fixture.debugElement.query(By.css('#title'));
    const elementPhoto = fixture.debugElement.query(By.css('#image'));

    expect((elementTitle.nativeElement as HTMLSpanElement).textContent).toEqual("New title");
    expect(elementPhoto.nativeElement.src).toEqual("http://localhost:9876/Newphoto");
  })
});
