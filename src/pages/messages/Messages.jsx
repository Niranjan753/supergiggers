import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Messages.scss";
import { FaSearch, FaEllipsisV, FaPaperPlane } from "react-icons/fa";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const conversations = [
    {
      id: 1,
      username: "Charley Sharp",
      lastMessage: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
      timestamp: "1 hour ago",
      unread: true,
      messages: [
        { id: 1, content: "Hello! How can I help you today?", timestamp: "10:30 AM", sent: false },
        { id: 2, content: "Hi! I have a question about my order.", timestamp: "10:32 AM", sent: true },
        { id: 3, content: "Sure, what would you like to know?", timestamp: "10:33 AM", sent: false },
      ]
    },
    {
      id: 2,
      username: "John Doe",
      lastMessage: "Provident maxime cum corporis esse aspernatur laborum dolorum?",
      timestamp: "2 hours ago",
      unread: true,
      messages: [
        { id: 1, content: "Hey John, how's it going?", timestamp: "09:15 AM", sent: true },
        { id: 2, content: "Hi Anna! All good, thanks. How about you?", timestamp: "09:20 AM", sent: false },
        { id: 3, content: "I'm doing well. Just wanted to check in about the project.", timestamp: "09:22 AM", sent: true },
      ]
    },
    {
      id: 3,
      username: "Sarah Johnson",
      lastMessage: "Can we discuss the new design proposal?",
      timestamp: "Yesterday",
      unread: false,
      messages: [
        { id: 1, content: "Sarah, have you seen the latest design mockups?", timestamp: "Yesterday, 3:45 PM", sent: true },
        { id: 2, content: "Yes, I have. They look great!", timestamp: "Yesterday, 4:00 PM", sent: false },
        { id: 3, content: "Glad you like them. Any suggestions for improvements?", timestamp: "Yesterday, 4:05 PM", sent: true },
      ]
    },
    {
      id: 4,
      username: "Mike Wilson",
      lastMessage: "The project deadline has been extended.",
      timestamp: "2 days ago",
      unread: false,
      messages: [
        { id: 1, content: "Hi Anna, just wanted to let you know that we've extended the project deadline.", timestamp: "2 days ago, 11:30 AM", sent: false },
        { id: 2, content: "That's great news, Mike! How much extra time do we have?", timestamp: "2 days ago, 11:45 AM", sent: true },
        { id: 3, content: "We've added an additional two weeks to the timeline.", timestamp: "2 days ago, 12:00 PM", sent: false },
      ]
    },
  ];

  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      // Logic to send message
      console.log("Sending message:", messageInput);
      setMessageInput("");
    }
  };

  return (
    <div className="messages">
      <div className="sidebar">
        <div className="sidebar-header">
          <img src="https://via.placeholder.com/40" alt="User" className="user-avatar" />
          <h2>Messages</h2>
          <FaEllipsisV className="header-icon" />
        </div>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search or start new chat" />
        </div>
        <div className="conversation-list">
          {conversations.map((conv) => (
            <div
              key={conv.id}
              className={`conversation-item ${selectedConversation === conv.id ? 'active' : ''} ${conv.unread ? 'unread' : ''}`}
              onClick={() => setSelectedConversation(conv.id)}
            >
              <img src={`https://via.placeholder.com/50?text=${conv.username[0]}`} alt={conv.username} className="conversation-avatar" />
              <div className="conversation-info">
                <h3>{conv.username}</h3>
                <p>{conv.lastMessage}</p>
              </div>
              <span className="conversation-timestamp">{conv.timestamp}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="chat-area">
        {selectedConversation ? (
          <>
            <div className="chat-header">
              <img src={`https://via.placeholder.com/40?text=${conversations.find(c => c.id === selectedConversation).username[0]}`} alt="User" className="user-avatar" />
              <h3>{conversations.find(c => c.id === selectedConversation).username}</h3>
              <FaEllipsisV className="header-icon" />
            </div>
            <div className="chat-messages">
              {conversations.find(c => c.id === selectedConversation).messages.map((message) => (
                <div key={message.id} className={`message ${message.sent ? 'sent' : 'received'}`}>
                  <p>{message.content}</p>
                  <span className="timestamp">{message.timestamp}</span>
                </div>
              ))}
            </div>
            <div className="message-input">
              <input
                type="text"
                placeholder="Type a message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button onClick={handleSendMessage}><FaPaperPlane /></button>
            </div>
          </>
        ) : (
          <div className="no-conversation-selected">
            <h2>Welcome to Messages</h2>
            <p>Select a conversation to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
