import { Content } from './helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'T_Price_GamingFranchises';
  singleGame?: Content;
  inputNumber: number = 0;
  constructor(private gameService: GameService) { }
  ngOnInit(): void {
    this.gameService.singleItem(3).subscribe(game => this.singleGame = game);
  }

  displayGameItem(id: string): void{
    this.gameService.singleItem(parseInt(id)).subscribe(game => this.singleGame = game);
  }
}

