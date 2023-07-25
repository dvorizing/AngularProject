import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsPipe'
})
export class StarsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    var ans = "";
    for (let i = 0; i < value; i++) {
      ans += "*";
    }
    return ans;
  }

}
