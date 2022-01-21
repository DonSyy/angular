import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent{
  gameList = [
    {id:1, name:'mario', console:'nes'},
    {id:2, name:'GTA', console:'ps4'},
    {id:3, name:'minecraft', console:'pc'}
  ];
  }


