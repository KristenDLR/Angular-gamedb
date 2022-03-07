import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { APIResponse, Game } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //communicates with back end.
  //The ability to request typed response objects.
  //Streamlined error handling.
  //Testability features.
  //Request and response interception.
  //HttpClient is dependency that communicates backend
  constructor(private http: HttpClient) { }

  //method calling from home component and fetching list of games
  getGameList(
    ordering:string,
    search?: string
    //models.ts creates models for APIResponse and Game
  ): Observable<APIResponse<Game>> {
    //default param ordering
    let params = new HttpParams().set('ordering', ordering);
    //if user searches, append search as parameter
    if (search){
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    //return get method return api repsonse
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/games`, {
      params: params,
    });
  }

}
