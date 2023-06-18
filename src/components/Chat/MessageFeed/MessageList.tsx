import { memo } from "react";
import { Message } from "../../../types/types"
import { MAX_MESSAGE_COUNT } from "../../../services/constants";

interface MessageListProps {
    messageList: Array<Message>;
}
const MessageList = ({ messageList }: MessageListProps) => (
    <>
        {messageList.length < MAX_MESSAGE_COUNT && <div className="message--welcome">Bienvenue sur le chat !</div>}
        {messageList.map((message, index) => (
            <div className="message" key={index}>
                <div className="messageContent">
                    <span style={{ color: message.user.color }}>{message.user.username}</span>{`: ${message.text}`}
                </div>
            </div>
        ))}
    </>
);

export default memo(MessageList);