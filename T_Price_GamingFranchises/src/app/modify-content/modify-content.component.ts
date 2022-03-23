import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newGame?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addGame(title: string, creator: string, imgURL: string, description: string, type: string, tags: string): void {
    this.newGame = {
      // id: parseInt(id),
      title: title,
      creator: creator,
      imgURL: imgURL,
      description: description,
      type: type,
      tags: tags.split(",")
    };
    this.newGameEvent.emit(this.newGame);
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
  }
}
