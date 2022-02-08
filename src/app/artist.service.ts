import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  data: any[];
  REST_API=`https://rest.bandsintown.com/artists/maroon5?app_id=abc`


  constructor(private httpClient: HttpClient) { }

  

  getArtist(artistName:string)
  {
    const REST_API=`https://rest.bandsintown.com/artists/${artistName}?app_id=abc`
    return this.httpClient.get(REST_API).pipe(
      map((res) => {
        return res;
      })
     
    ) 
  }

  getArtistEventDetails(artistName:string)
  {
    const REST_API_event=`https://rest.bandsintown.com/artists/${artistName}/events?app_id=abc`
    return this.httpClient.get(REST_API_event).pipe(
      map((res) => {
        return res;
      })
    )
  }

 public setArtistData(data: any[]){
  this.data = data;
  }
  public getArtistData (){
    if(this.data){
      return this?.data[0];
    }else{
      return null
    }
    
  }

}
