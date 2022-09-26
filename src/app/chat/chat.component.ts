import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import { Channel } from '../interfacemodule/channel';
import { Message } from '../interfacemodule/messages';
import { User } from '../interfacemodule/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [UserService]
})
export class ChatComponent implements OnInit,OnChanges {
  @Input() channel!: Channel;
  @Input() user!:User;
  constructor(private userservice: UserService) {}

  messageArray:Message[]=[];
  newmessage:string='';
  sub !: Subscription
  isMember : boolean = false;
  ngOnInit(): void
  {
    this.sub = this.userservice.message$.pipe(filter
      (message => message.body.channel === this.channel.name)).subscribe
      (message => this.receiveMessage(message));
  }
  ngOnChanges()
  {
    let flag = false;
    this.channel.users.map(userId => {
      if(userId === this.user.id)
        flag = true;
    })
    if(flag)
    {
      this.isMember = true;
      this.initializeChat();
    }
    else
    this.isMember = false;
  }

  initializeChat()
  {
    this.messageArray = this.userservice.getMyMessages(this.channel.name, this.user.id);
  }

  sendMessage()
  {
    if(!this.newmessage)
    return;
    this.userservice.sendMessage(this.user.id, this.newmessage, this.channel.name);
    this.newmessage="";
  }

  receiveMessage(message:Message)
  {
    this.messageArray
    .push(message);
  }

  joinChannel()
  {
    this.userservice.joinChannel(this.channel.name, this.user.id);
    this.isMember = true;
    this.initializeChat();
  }
}
