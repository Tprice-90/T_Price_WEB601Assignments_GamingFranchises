import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {

  id?: number;
  game?: Content;
  constructor(private route: ActivatedRoute, private gameService: GameService, public gameMessage: MessageService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? "0");
      this.gameService.singleItem(this.id).subscribe(
        (c) => {
          this.game = c;
          this.gameMessage.add(`Retrieving game: ${this.game?.title} at id: ${this.id}`);
        });
    });
  }

}
