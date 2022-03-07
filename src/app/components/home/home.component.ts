import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { APIResponse, Game } from '../../models';


//loads first
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // originally public sort: string
  //intend to expose to the outside world as a part of your class's API
  public sort: string ;
  public games: Array<Game>;


  constructor(
    //It signals your intent that whatever you've put it on shouldn't be touched from outside the class
    // it shouldn't be accessed from anywhere else
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) { }
  

  //lifecyce hook, runs first when the component builds
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      //when we load the page, checks if there are any game search queries
      if (params['game-search']) {
        this.searchGames('metacrit', params['game-search']);
      }else {
        this.searchGames('metacrit');
      }
    });
  }

    searchGames(sort: string, search?: string): void {
      this.httpService
      .getGameList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
    }
  }


