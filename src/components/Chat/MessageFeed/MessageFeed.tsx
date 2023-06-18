import { useEffect, useMemo, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { Message } from "../../../types/types";
import ScrollingHandler from "./ScrollingHandler";
import MessageList from "./MessageList";
import { MAX_MESSAGE_COUNT } from "../../../services/constants";

interface MessageFeedProps {
    socket?: Socket;
}
const MessageFeed = ({ socket }: MessageFeedProps) => {
    const messageListRef = useRef<HTMLDivElement>(null);
    const [hasChatScrolled, setHasChatScrolled] = useState(false);
    const [messages, setMessages] = useState<Array<Message>>([]);
    const messagesToDisplay = useMemo(() => messages, [messages.length]);

    useEffect(() => {
        socket?.on("new-message", (message: Message) => {
            setMessages((messages) => [...messages.sort((a, b) => a.date - b.date).slice(!hasChatScrolled ? -MAX_MESSAGE_COUNT+1 : undefined), message]);
        });
    }, [socket]);

    useEffect(() => {
        if (!hasChatScrolled && messages.length > MAX_MESSAGE_COUNT) {
            setMessages(messages => messages.sort((a, b) => a.date - b.date).slice(-MAX_MESSAGE_COUNT))
        }
    }, [hasChatScrolled]);

    const onMessageListScroll = ({ currentTarget: { scrollTop, scrollHeight, clientHeight } }: React.BaseSyntheticEvent<UIEvent, EventTarget & HTMLDivElement, EventTarget> ) => {
        setHasChatScrolled(scrollTop + clientHeight !== scrollHeight);
    };

    return (
        <section>
            <div className="message-list" ref={messageListRef} onScroll={onMessageListScroll}>
                <MessageList messageList={messagesToDisplay} />
            </div>
            
            <ScrollingHandler
                messageCount={messages.length}
                hasChatScrolled={hasChatScrolled}
                scrollChatToBottom={(behavior: ScrollBehavior) => messageListRef.current?.scrollTo({ behavior, top: messageListRef.current?.scrollHeight })}
            />
        </section>
    );
};

export default MessageFeed;
