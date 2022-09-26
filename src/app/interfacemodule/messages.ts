import { Channel } from "./channel";
import { User } from "./user";

export interface MessageTemplate {
  sender: User['id'],
  content: string,
  channel: Channel['name']
}
export interface Message {
  id: number,
  time: Date,
  body: MessageTemplate
}
