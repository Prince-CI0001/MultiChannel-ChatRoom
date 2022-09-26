import { Component , OnInit} from '@angular/core';
import { User } from './interfacemodule/user';
import { AppService } from './app.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multi-channel-chatroom';
  userName:string="";
  user: User[]=[];
  constructor(private appservice : AppService){}
  ngOnInit(){
    this.user = this.appservice.getUsers();
  }
  userPage(){
    if(!this.userName)
    return;
    this.appservice.getUser(this.userName);
    this.userName="";
  }
  trackUser(index:number,user:User)
  {
    return user.id;
  }
  logOutUser(id:number)
  {
    this.user = this.user.filter(user =>user.id !== id);
  }
}
