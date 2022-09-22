import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  newGame: Content = {
    title: '', description: '', creator: '', imgURL: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = "";
  //@Input() keyPressed: Boolean = false; //used for detectChange method

  constructor(public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Content) { }

  ngOnInit(): void {
  }

  addContentFromChild(): void {
      this.newGame.tags = this.tempTags.split(',');
      this.dialogRef.close(this.newGame);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /* updateContent() {
    this.newGame.id = parseInt(this.tempId);
    if (this.newGame.id !== undefined && this.checkValidGameId.some(game => game.id === this.newGame.id)) {
      this.newGame.tags = this.tempTags.split(',');
      this.gameService.updateContent(this.newGame).subscribe(() => {
        this.messageService.add("Game successfully updated on the server!");
        this.newGameEvent.emit(this.newGame);
        this.dialogRef.close(this.newGame);
      });
      this.newGame = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = "";
    }
  } */

}
