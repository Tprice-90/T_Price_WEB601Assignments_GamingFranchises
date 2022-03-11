import { Content } from './helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'T_Price_GamingFranchises';
  singleItem: Content[]
  constructor(private gameService: GameService) { this.singleItem = [] }
  ngOnInit(): void {
    this.gameService.singleItem(4).subscribe(game => this.singleItem = game);
  }
}

