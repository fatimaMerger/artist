import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxPaginationModule } from 'ngx-pagination';

import { AboutArtistComponent } from './about-artist.component';

describe('AboutArtistComponent', () => {
  let component: AboutArtistComponent;
  let fixture: ComponentFixture<AboutArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutArtistComponent ],
      imports:[HttpClientModule, ReactiveFormsModule,RouterTestingModule, NgxPaginationModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
