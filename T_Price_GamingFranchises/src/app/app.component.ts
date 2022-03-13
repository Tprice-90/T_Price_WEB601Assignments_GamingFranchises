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
  inputNumber: number = 0;
  constructor(private gameService: GameService) { this.singleItem = [] }
  ngOnInit(): void {
    this.gameService.singleItem(3).subscribe(game => this.singleItem = game);
  }

  indexInput(value: string): number {
    return this.inputNumber = parseInt(value)
  }
}

