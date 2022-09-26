import { Pipe, PipeTransform } from '@angular/core';
// import { AppService } from './app.Service';

@Pipe({
  name: 'convertTimeToString'
})
export class ConvertTimeToStringPipe implements PipeTransform {

  // constructor(private appservice:AppService){}
  transform(value: Date): string {
    return value.toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit'
    });
  }

}
