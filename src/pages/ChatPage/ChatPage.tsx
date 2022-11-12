import React, { useEffect } from "react";
import { FC } from "react"
import { useParams, Navigate } from "react-router-dom"
import { ChatList } from "../../components/ChatList/ChatList"
import { Form } from '../../components/Form'
import { MessageList } from "../../MessageList/MessageList"
import { AUTHOR, Chat, Message, Messages } from "../../types"
import style from './ChatPage.module.css'
import { WithClasses } from '../../HOC/WithClasses';

interface ChatPageProps {
    chats: Chat[];
    onAddChat: (chat: Chat) => void;
    messages: Messages;
    onAddMessage: (chatId: string, msg: Message) => void;
    onDeleteChat: (chat: string) => void;
}

export const ChatPage: FC<ChatPageProps> = ({ 
    chats, 
    onAddChat, 
    messages, 
    onAddMessage, 
    onDeleteChat
}) => {
    const { chatId } = useParams();
    const MessageListWithClass = WithClasses(MessageList)

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length > 0 && 
            messages[chatId][messages[chatId].length - 1].author === AUTHOR.USER
        ) {
        const timeout = setTimeout(() => {
            onAddMessage(chatId, {
                author: AUTHOR.BOT,
                value: 'Im BOT',
            });
        }, 1000);

      return () => clearTimeout(timeout)
    }
    }, [chatId, messages, onAddMessage])

    if (chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace/>
    }
    return (
    <>
        <ChatList 
            chats={chats} 
            onAddChat={onAddChat} 
            onDeleteChat={onDeleteChat}
        />
        {/* <MessageList messages={chatId ? messages[chatId] : []}/> */}
        <MessageListWithClass 
            messages={chatId ? messages[chatId] : []} 
            classes={ style.border }
        />
        <Form addMessage={onAddMessage}/>
    </>
    );
};