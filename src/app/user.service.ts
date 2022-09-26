import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message,MessageTemplate } from './interfacemodule/messages';
import { AppService } from './app.Service';

@Injectable()
export class UserService {
  message$: Observable<Message>;

  constructor(private appService: AppService) {
    this.message$ = appService.message$;
  }

  getAllChannels() {
    return this.appService.getChannels();
  }

  joinChannel(name: string, userId: number) {
    return this.appService.joinChannel(name, userId);
  }

  getMyMessages(channelName: string, userId: number) {
    return this.appService.getMessages().filter(message => message.body.channel === channelName);;
  }

  sendMessage(userId: number, content: string, channelName: string) {
    let message: MessageTemplate = {
      sender: userId,
      content: content,
      channel: channelName
    }
    console.log(message);
    this.appService.broadcastMessage(message);
  }
}
