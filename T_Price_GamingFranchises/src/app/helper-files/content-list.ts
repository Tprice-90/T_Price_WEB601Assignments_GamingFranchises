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

    set items(newItem: Content[]) {
        this._items = newItem;
    }

    itemLength() {
        return this._items.length;
    }

    contentOutput(_items: Content[]) {
        _items.forEach(e => {
            `<h1>Title: ${e.title}</h1> <img src='${e.imgURL}' /> <h2>Creator: ${e.creator}</h2> <h3>Type: ${e.type}</h3> <p>${e.description}</p>`
        });
    }
}