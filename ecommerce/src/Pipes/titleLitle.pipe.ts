import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleLitle'
})
export class TitleLitlePipe implements PipeTransform {

  transform(value: string): string {
      let title:string="";
      for (let index = 0; index < 15; index++) {
        title += value[index];

      }
    return title+"...";
  }

}
