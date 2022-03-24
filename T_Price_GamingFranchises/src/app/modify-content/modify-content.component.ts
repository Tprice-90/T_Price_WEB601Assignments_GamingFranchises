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
  newGame: Content = {
    id: -1, title: '', description: '', creator: '', imgURL: '', type: undefined, tags: []
  };
  //@Input() keyPressed: Boolean = false; //used for detectChange method
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
      this.newGame = {
        id: -1, title: '', description: '', creator: '', imgURL: '', type: undefined, tags: []
      }
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
      this.newGame = {
        id: -1, title: '', description: '', creator: '', imgURL: '', type: undefined, tags: []
      }
    }
  }
  
  // Trying to use this as a trigger to change button text
  /* detectChange(value: string): Boolean {
    if(value !== undefined) {
      return this.keyPressed = true;
    }
    else {
      return this.keyPressed = false;
    }
  } */
}
