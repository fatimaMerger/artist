import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-about-artist',
  templateUrl: './about-artist.component.html',
  styleUrls: ['./about-artist.component.css']
})
export class AboutArtistComponent implements OnInit,OnDestroy{
 artistdata:any;
 artistEventData:any;
 subscription$:Subscription;
 p: any = 1;
  constructor(private artist:ArtistService, private route:Router) { }
  
  ngOnDestroy(): void {
    this?.subscription$?.unsubscribe();
  }
  ngOnInit(): void {
    this.getArtist();
    this.getArtistEventDetails(); 
  }
  getArtist() {
    this.artistdata = this.artist.getArtistData();
    if(!this?.artistdata?.name){
      this.route.navigateByUrl('')
    }
  }
  getArtistEventDetails()
  {
    this.subscription$= this.artist.getArtistEventDetails(this?.artistdata?.name).subscribe((res)=>{
      this.artistEventData=res
  
    })
  }
  ChangePage(e) {
    this.p = e;
  }
}
