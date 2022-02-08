import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistService } from '../artist.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ArtistService;
  let httpController: HttpTestingController;
  let url='https://rest.bandsintown.com/artists/${artistName}?app_id=abc';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[ReactiveFormsModule,RouterTestingModule, HttpClientTestingModule],
      providers:[]
    })
    .compileComponents();
    service = TestBed.inject(ArtistService);
    httpController = TestBed.inject(HttpTestingController);
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain default value for the form',()=>{
    expect(component.artist.value).toEqual({artistName:''});
  })

  it('should call the showartist function',()=>{
    spyOn(component,'showartist')
    
  })

});
