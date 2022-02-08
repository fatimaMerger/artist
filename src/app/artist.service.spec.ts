import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ArtistService } from './artist.service';

describe('ArtistService', () => {
  let service: ArtistService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ArtistService]
    });
    httpController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getArtist should make a GET request',()=>{
    //setup
    const artist ={result:[], next_page:true};
    //actual test
    service.getArtist('maroon5').subscribe(resp=>{
      expect(resp).toEqual(artist);
    });
    // the follwing 'expectOne()' will match the request's URL
    const dataAPI=`${service.REST_API}`
    const req= httpController.expectOne(`${dataAPI}`);

    //assert that the request is get
    expect(req.request.method).toEqual('GET')
    req.flush(artist);
  });
});

