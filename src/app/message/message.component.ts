import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.Service';
import { Message } from '../interfacemodule/messages';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() channelOwner:string="";
  @Input() message!:Message;
  constructor(private appservice:AppService){}
  user:string='';
  sides!: boolean;
  ngOnInit(): void {
    this.user = this.appservice.getUsers().find(user => user.id === this.message.body.sender)?.name || '';
    // console.log(this.channelOwner+" "+this.user);
    this.sides =  (this.channelOwner===this.user);
  }


}
