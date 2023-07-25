import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursPipe'
})

export class HoursPipePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    var ans = "";
    if (value >= 60)
      ans += Math.round(value / 60)+ " hours and ";
    value %= 60;
    ans += value + " minutes";
    return ans;
  }

}
