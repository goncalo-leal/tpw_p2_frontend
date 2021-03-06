import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Favorite } from '../interfaces/favorite';
import { User } from '../interfaces/user';
import { Publication } from '../interfaces/publication';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private baseUrl = "https://zer0sense2.pythonanywhere.com/ws/";

  constructor(private http: HttpClient) { }


  checkIfFavorite( user_id:number,pub_id:number): Observable<Favorite> {
    console.log("AQUIII")
    return this.http.get<Favorite>(this.baseUrl + 'checkIfFavorite?id=' + pub_id+'&&user_id='+user_id);
  }

  addFavorite(fav:Favorite) : Observable<any> {
    return this.http.post(this.baseUrl + 'favcre',fav,httpOptions);

  }
  deleteFavorite(fav:Favorite): Observable<any>{
    return this.http.delete<Favorite>(this.baseUrl + 'favdel/'+fav.id,httpOptions);
  }
 
}
