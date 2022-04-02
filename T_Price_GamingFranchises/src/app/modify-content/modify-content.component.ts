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
  
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = false;
    dialogConfig.width = "300px";
    dialogConfig.data = {
      id: -1,
      title: "",
      description: "",
      creator: "",
      type: "",
      tags: []
    }

    this.dialog.open(DialogBoxComponent, dialogConfig);
    
    const dialogRef = this.dialog.open(DialogBoxComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(data => {
      this.gameService.addContent(data).subscribe((newGameFromServer) => {
        this.messageService.add("Game successfully added to the server!");
        this.newGameEvent.emit(newGameFromServer);
        console.log(data);
      });
    }
    );    
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
