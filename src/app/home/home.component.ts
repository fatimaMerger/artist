import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  artist:FormGroup
  subscription$:Subscription
  constructor( private artistService:ArtistService, private router: Router, private _fb:FormBuilder) { }

  //unsubscribing the data
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }


  ngOnInit(): void {
    this.formInit();
  }

  formInit(){
    this.artist = this._fb.group({
      artistName:['',Validators.required]
    })
  }

 
  showartist()
  {
    // subscription$ is subscribing response using artist service.
    this.subscription$ = this.artistService.getArtist(this.artist.value.artistName).subscribe((res)=>{
      
      if(res['name']) //checking if the name of the artist exists.
      {
        let data = []
        data.push(res); //response is being pushed in an array, to match types in Artist service.
        this.artistService.setArtistData(data); // setter for artist service.
        this.router.navigate(['/about-artist']) //route to about-artist page
      }
      else
      {
        alert('artist not found')
        this.artist.reset();
      }
    })
  }

 
}
