import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;
  @Input() button: String = 'Add Game';

  constructor(private messageService: MessageService) { }
  ngOnInit(): void {
  }

  addGame(id: string ,title: string, description: string, creator: string, imgURL: string, type: string, tags: string): void {
    if(id) {
      this.newGame = {
        title: title,
        creator: creator,
        imgURL: imgURL,
        description: description,
        type: type,
        tags: tags.split(","),
        id: parseInt(id)
      };
      this.updateGameEvent.emit(this.newGame);
      this.messageService.add(`Content item ${this.newGame.title} updated`);
    }
    else {
      this.newGame = {
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type,
        tags: tags.split(",")
      };
      this.newGameEvent.emit(this.newGame);
      this.messageService.add(`Content item ${this.newGame.title} added`);
    }
  }
  updateGame(id: string, title: string, creator: string, imgURL: string, description: string, type: string, tags: string): void {
    this.newGame = {
      id: parseInt(id),
      title: title,
      creator: creator,
      imgURL: imgURL,
      description: description,
      type: type,
      tags: tags.split(",")
    };
    this.updateGameEvent.emit(this.newGame);
    this.messageService.add(`Content item ${this.newGame.title} updated`);
  }
}
