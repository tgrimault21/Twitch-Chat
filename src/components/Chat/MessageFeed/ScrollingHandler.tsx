import { memo, useEffect, useState } from "react";
import { ReactComponent as ArrowDown } from "../../../assets/arrow-down.svg";
import { ReactComponent as Pause } from "../../../assets/pause.svg";

interface ScrollingHandlerProps {
    messageCount: number;
    hasChatScrolled: boolean;
    scrollChatToBottom: (behavior: ScrollBehavior) => void | undefined;
}
const ScrollingHandler = ({ messageCount, hasChatScrolled, scrollChatToBottom }: ScrollingHandlerProps) => {
    const [readMessageCount, setReadMessageCount] = useState(0);
    const [isDisplayedUnreadMessageCount, setDisplayUnreadMessageCount] = useState(false);
    const unreadMessageCount = messageCount - readMessageCount;

    useEffect(() => {
        if (!hasChatScrolled) {
            scrollChatToBottom("instant");
            setReadMessageCount(messageCount);
        }
    }, [hasChatScrolled, messageCount]);

    return (
        hasChatScrolled ? (
            <div className="scrolling-handler">
                <button
                    onMouseEnter={() => setDisplayUnreadMessageCount(true)}
                    onMouseLeave={() => setDisplayUnreadMessageCount(false)}
                    onClick={() => scrollChatToBottom("smooth")}
                >
                    {isDisplayedUnreadMessageCount ? (
                        <div className="scrolling-handler__button-content">
                            <ArrowDown />
                            <span>{newMessagesText(unreadMessageCount)}</span>
                        </div>
                    ) : (
                        <div className="scrolling-handler__button-content">
                            <Pause />
                            <span>Chat mis en pause à cause du défilement</span>
                        </div>
                    )}
                </button>
            </div>
        ) : (
            <></>
        )
    );
};

const newMessagesText = (unreadMessageCount: number): string => {
    if (unreadMessageCount <= 0) {
        return "Voir les nouveaux messages";
    } else if (unreadMessageCount === 1) {
        return "1 nouveau message";
    } else if (unreadMessageCount > 1 && unreadMessageCount <= 20) {
        return `${unreadMessageCount} nouveaux messages`;
    } else {
        return "Plus de 20 nouveaux messages";
    }
};

export default memo(ScrollingHandler);