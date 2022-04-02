import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { GameService } from '../services/game.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

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

  constructor(private gameService: GameService, 
    private messageService: MessageService,
    public dialogRef: MatDialogRef<DialogBoxComponent>) { }

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
        console.log(this.newGame);
      });
      this.newGame = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
    }
    else {
      this.newGame.id = parseInt(this.tempId);
      if (this.newGame.id !== undefined && this.checkValidGameId.some(game => game.id === this.newGame.id)) {
        this.newGame.tags = this.tempTags.split(',');
        this.gameService.updateContent(this.newGame).subscribe(() => {
          this.messageService.add("Game successfully updated on the server!");
          this.newGameEvent.emit(this.newGame);
        });
        this.newGame = {
          title: "", description: '', creator: '', type: undefined
        };
        this.tempId = "";
        this.tempTags = "";
      }
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
