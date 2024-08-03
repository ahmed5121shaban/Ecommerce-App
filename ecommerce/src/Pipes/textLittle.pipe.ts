import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLittle'
})
export class TextLittlePipe implements PipeTransform {

  transform(value: string): string {
    let text="";
    for (let index = 0; index < 50; index++) {
      text += value[index];

    }
    text+= "    ... :)"
    return text;
  }

}
