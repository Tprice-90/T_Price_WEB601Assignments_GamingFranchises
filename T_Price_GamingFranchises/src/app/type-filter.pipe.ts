import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';



@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(contentList: Content[], gameType?: string):Content[] {
    if(gameType) {
      return contentList.filter(e => e.type == gameType);
    }
    else {
      return contentList.filter(e => e.type == null);
    }
  }

}
