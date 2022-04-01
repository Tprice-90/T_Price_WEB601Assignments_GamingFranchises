import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
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

  constructor(private gameService: GameService, private messageService: MessageService, 
    private dialog: MatDialog) { }
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
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
