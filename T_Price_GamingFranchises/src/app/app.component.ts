import { Content } from './helper-files/content-interface';
import { ApplicationRef, Component, Input, OnInit } from '@angular/core';
import { GameService } from './services/game.service';
import { LogUpdateService } from './services/log-update.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';
import { concat, first, interval } from 'rxjs';

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
    private logService: LogUpdateService,
    private appRef: ApplicationRef,
    private updates: SwUpdate) { }

  ngOnInit(): void {
    this.gameService.singleItem(3).subscribe(game => this.singleGame = game);
    this.logService.init();
    // const appIsStable$ = this.appRef.isStable.pipe(
    //   first(isStable =>isStable === true));
    // const everyHour$ = interval(1 * 60 * 60 * 1000);
    // const everyHourWhenAppIsStable$ = concat(appIsStable$, everyHour$);
    // everyHourWhenAppIsStable$.subscribe(() => this.updates.checkForUpdate());
  }

  displayGameItem(id: string): void{
    this.gameService.singleItem(parseInt(id)).subscribe(game => this.singleGame = game);
  }
}

