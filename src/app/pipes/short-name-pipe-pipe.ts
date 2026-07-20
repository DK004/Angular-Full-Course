import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortNamePipe'
})
export class ShortNamePipePipe implements PipeTransform {

  transform(name : string): string {
    const parts = name.split(" ");
    const fName = parts[0];
    const lName = parts[1];
    return `${fName.charAt(0)}. ${lName}`;

  }

}
