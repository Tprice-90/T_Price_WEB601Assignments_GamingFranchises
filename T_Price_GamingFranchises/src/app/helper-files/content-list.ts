import { identifierName } from '@angular/compiler';
import { Content } from '../helper-files/content-interface';

export class ContentList {
    private _items: Content[];
    constructor(item: Content) {
        this._items = [];
        this._items[0] = item;
    }
    
    get items(): Content[] {
        return this._items;
    }

    setItems(newItem: Content){
        this._items.push(newItem);
    }

    itemLength() {
        return this._items.length;
    }

    contentOutput(index: Content) {
        let item = this._items.find(e => e == index);
        if(item) {
            return `<h1>Title: ${item.title}</h1> 
                    <img src ='${item.imgURL}' alt='${item.title}' />  
                    <h2>Creator: ${item.creator}</h2> 
                    <h3>Type: ${item.type}</h3> 
                    <p>${item.description}</p>`;
        }
        else {
            return `<h1>Content not found</h1>`
        }
    }
}