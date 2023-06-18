export interface Message {
    type: MessageType;
    text: string;
    user: User;
    date: number;
}

interface User {
    username: string;
    color: string;
}

export enum MessageType {
    TEXT = "text"
}