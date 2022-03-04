import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ElementRef } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() addGameEvent: EventEmitter<Content> = new EventEmitter<Content>();
  message: String = "";
  newGame?: Content;
  constructor() { }

  ngOnInit(): void {
  }

  addGame(id: string, title: string, description: string, creator: string, imgURL: string, type: string, tags: string) {
    
    let gamePromise = new Promise((success, fail) => {
      if(id && title && description && creator) {
        success(`Game added to list: ${title}`);
      }
      else {
        fail(`Game failed to be added: ID, Title, Description, Creator are required fields.`);
      }
    });
    gamePromise.then((success) => {
      this.newGame = {
        id: parseInt(id),
        title: title,
        description: description,
        creator: creator,
        imgURL: imgURL,
        type: type,
        tags: tags.split(",")
      }
      this.addGameEvent.emit(this.newGame);
      this.message = "";
      console.log(success);
    })
    .catch((fail) =>{
      console.log(fail);
      this.message = fail;
    });
  }
}
