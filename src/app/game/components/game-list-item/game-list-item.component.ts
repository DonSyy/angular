import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent {
  @Input() 
  game:any;
  onUserClicked(game : any){
    selectGame();
  }
  @Output()
  leNom = new EventEmitter();
  }


function selectGame() {
  console.log('click');
}

