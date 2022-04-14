import { Content } from './helper-files/content-interface';
import { Component, Input, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { LogUpdateService } from './services/log-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'T_Price_GamingFranchises';
  singleGame?: Content;
  inputNumber: number = 0;
  constructor(private gameService: GameService,
    private logService:LogUpdateService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.gameService.singleItem(3).subscribe(game => this.singleGame = game);
    this.logService.init();
  }

  displayGameItem(id: string): void{
    this.gameService.singleItem(parseInt(id)).subscribe(game => this.singleGame = game);
  }
}

