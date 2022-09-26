import { Injectable } from "@angular/core";
import { User } from "./interfacemodule/user";
import { Channel } from "./interfacemodule/channel";
import { Message, MessageTemplate } from "./interfacemodule/messages";
import { Subject } from "rxjs";
@Injectable({
  providedIn:'root'
})
export class AppService{
users:User[];
channels:Channel[];
messages: Message[];
constructor(){
  this.users = [{
    id:0,
    name: "Andrew"
  }]
  this.channels=[{
    name : 'General',
    admin : 0,
    users:this.users.map(user => user.id)
  }]
  this.messages=[];
}
getUsers()
{
  return this.users;
}
getChannels() {
  return this.channels;
}

getMessages() {
  return this.messages;
}

getUser(name: string) {
  let user: User = this.users.find(user => user.name === name) ??
  this.createUser(name);
  return user;
}

createUser(name: string) {
  let user: User = {
    id: Math.random(),
    name: name
  }
  this.users.push(user);
  this.channels[0].users.push(user.id);
  return user;
}

createChannel(name: string, userId: number) {
  let channel = {
    name: name,
    admin: userId,
    users: [ userId ]
  }
  this.channels.push(channel);
  return channel;
}

joinChannel(name: string, userId: number) {
  let channel: Channel;
  let index = this.channels.findIndex(channel => {
    return channel.name === name;
  })

  if(index === -1) {
    channel = this.createChannel(name, userId);
  }
  else {
    this.channels[index].users.push(userId);
    channel = this.channels[index];
  }
  return channel;
}


  // Messages section
  messageSubject = new Subject<Message>();
  message$ = this.messageSubject.asObservable();

  broadcastMessage(messageBody: MessageTemplate) {
    let message = {
      id: Math.random(),
      time: new Date(),
      body: messageBody
    }
    this.messages.push(message);
    this.messageSubject.next(message);
  }

}
