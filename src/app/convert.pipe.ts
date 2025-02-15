import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
  if(!value){
      return '';
  }
    switch(targetUnits){
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.69034 * 1000;
      case 'cm':
        return value * 1.69034 * 1000 * 1000;
      default:
        return 
        throw new Error('Target Unit is not supported');
    }
  }
}
