import io, { Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import Header from "./Header";
import MessageList from "./MessageFeed/MessageFeed";
import SendMessageBox from "./SendMessageBox";

const CONNECTION_URL = "wss://api.dev.stories.studio/";
const SOCKET_PATH = "/interview-test";
const SOCKET_TRANSPORTS = ["websocket"];

const connectSocket = () => {
  const socket = io(CONNECTION_URL, {
    // @ts-ignore
    transport: SOCKET_TRANSPORTS,
    path: SOCKET_PATH
  });

  return socket;
};

const Chat = () => {
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        const connectedSocket = connectSocket();
        setSocket(connectedSocket);

        return () => {
            connectedSocket.close();
        };
    }, []);

    return (
        <div className="chat">
            <Header />
            <MessageList socket={socket} />
            <SendMessageBox socket={socket} />
        </div>
    );
};

export default Chat;
