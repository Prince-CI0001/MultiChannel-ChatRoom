import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChannelComponent } from './channel/channel.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { GetUserNamePipe } from './get-user-name.pipe';
import { ConvertTimeToStringPipe } from './convert-time-to-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ChannelComponent,
    ChatComponent,
    MessageComponent,
    GetUserNamePipe,
    ConvertTimeToStringPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
