import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from "rxjs/operators";




@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor( private _http:HttpClient ) { }

  getNews(newsURL:string){
     console.log('News URL: '+ newsURL);
    return this._http
    .get( newsURL )
    .pipe(map( (response: Response) =>  response  ))
    
    }
}
