import { Pipe, PipeTransform } from '@angular/core';
import { AppService } from './app.Service';

@Pipe({
  name: 'getUserName'
})
export class GetUserNamePipe implements PipeTransform {

  constructor(private appservice:AppService){}
  transform(userId: number): string {
    let user = this.appservice.getUsers().find(user => user.id === userId);

    if(user)
    return user.name;

    return '';

}
}
