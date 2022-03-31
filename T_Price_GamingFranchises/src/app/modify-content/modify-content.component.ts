import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GameService } from '../services/game.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent implements OnInit {

  @Output() newGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  @Output() updateGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  checkValidGameId: Content[] =[];
  newGame: Content = {
    title: '', description: '', creator: '', imgURL: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = "";
  errorMessage: string = "";
  //@Input() keyPressed: Boolean = false; //used for detectChange method
  @Input() button: String = 'Add Game';
  @Input() id: String = '';

  constructor(private gameService: GameService, private messageService: MessageService) { }
  ngOnInit(): void {
    this.gameService.getContent().subscribe(list => {
      this.checkValidGameId = list;
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newGame.tags = this.tempTags.split(',');
      this.gameService.addContent(this.newGame).subscribe((newGameFromServer) => {
        this.messageService.add("Game successfully added to the server!");
        this.newGameEvent.emit(newGameFromServer);
      });

      // this.newContentEvent.emit(this.newGame);
      this.newGame = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      // this.errorMessage = "";
    }
    else {
      this.newGame.id = parseInt(this.tempId);
      if (this.newGame.id !== undefined
        && this.checkValidGameId.some(game => game.id === this.newGame.id)) {
          this.newGame.tags = this.tempTags.split(',');
          this.gameService.updateContent(this.newGame).subscribe(() => {
            this.messageService.add("Movie successfully updated on the server!");
            this.newGameEvent.emit(this.newGame);
          });
    
          // this.newContentEvent.emit(this.newContent);
          this.newGame = {
            title: "", description: '', creator: '', type: undefined
          };
          this.tempId = "";
          this.tempTags = ""
          // this.errorMessage = "";
      }
      
    }

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
