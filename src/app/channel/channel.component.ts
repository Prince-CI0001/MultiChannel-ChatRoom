import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Channel } from '../interfacemodule/channel';
import { User } from '../interfacemodule/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
  providers :[UserService]
})
export class ChannelComponent{

  @Input() user!: User;
  @Output() logout:EventEmitter<number>=new EventEmitter<number>();
  channelsArray : Channel[]=[];
  curr_channel !: Channel;
  channelName!:string;

  constructor(private userservice : UserService){}
  ngOnInit(): void {
      this.channelsArray=this.userservice.getAllChannels();
      this.curr_channel=this.channelsArray[0];
  }

  addChannel(){
    if(!this.channelName)
    return;
    this.curr_channel=this.userservice.joinChannel(this.channelName,this.user.id);
    this.channelName='';
  }
  quitUser(){
    this.logout.emit(this.user.id);
  }

  optedChannel(channel:Channel){
    this.curr_channel=channel;
  }

}
