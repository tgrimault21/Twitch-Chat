import { useState } from "react";
import { Socket } from "socket.io-client";
import { Message, MessageType } from "../../types/types";

interface SendMessageBoxProps {
    socket?: Socket;
}
const SendMessageBox = ({ socket }: SendMessageBoxProps) => {
    const [messageToSend, setMessageToSend] = useState<string>("");

    const onSendMessage = () => {
        const text = messageToSend.trimStart();
        if (text.length > 0) {
            socket?.emit("send-message", {
                type: MessageType.TEXT,
                text,
                user: { username: import.meta.env.VITE_CONNECTED_USER_NAME, color: import.meta.env.VITE_CONNECTED_USER_COLOR },
                date: Date.now()
            } as Message);
            setMessageToSend("");
        }
    };

    const sendOnEnterKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            onSendMessage();
            e.preventDefault();
            e.stopPropagation();
        }
    };

    return (
        <footer>
            <textarea
                placeholder="Envoyer un message"
                onKeyDown={sendOnEnterKey}
                value={messageToSend}
                rows={1}
                onChange={({ target }) => setMessageToSend(target.value)}
            />
            <div className="chat-button-box">
                <button onClick={onSendMessage}>
                    <span>Chat</span>
                </button>
            </div>
        </footer>
    );
};

export default SendMessageBox