import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-game-infos-components',
  templateUrl: './basic-game-infos-components.component.html',
  styleUrls: ['./basic-game-infos-components.component.scss']
})

export class BasicGameInfosComponentsComponent {
  @Input() game:any;

}
 

