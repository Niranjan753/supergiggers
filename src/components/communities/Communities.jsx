import React, { useState } from 'react';
import './Communities.scss';
import { FaSearch, FaPlusCircle, FaHashtag, FaUserFriends } from 'react-icons/fa';

const communities = [
  { id: 1, name: 'Web Development', members: 150 },
  { id: 2, name: 'Data Science', members: 120 },
  { id: 3, name: 'Machine Learning', members: 200 },
  { id: 4, name: 'Cyber Security', members: 180 },
  { id: 5, name: 'Cloud Computing', members: 170 },
  { id: 6, name: 'Blockchain', members: 160 },
];

const channels = {
  1: [
    { id: 1, name: 'General' },
    { id: 2, name: 'Resources' },
    { id: 3, name: 'Announcements' },
    { id: 4, name: 'Q&A' },
    // Add more channels for community 1
  ],
  2: [
    { id: 1, name: 'General' },
    { id: 2, name: 'Projects' },
    { id: 3, name: 'Resources' },
    { id: 4, name: 'Announcements' },
    { id: 5, name: 'Q&A' },
    // Add more channels for community 2
    ],
  3: [
    { id: 1, name: 'General Discussion' },
    { id: 2, name: 'Project Showcase' },
    { id: 3, name: 'Learning Resources' },
    { id: 4, name: 'Community Announcements' },
    { id: 5, name: 'Questions & Answers' },
    // Add more channels for community 3
    ],
  4: [
    { id: 1, name: 'General' },
    { id: 2, name: 'Projects' },
    { id: 3, name: 'Resources' },
    { id: 4, name: 'Announcements' },
    { id: 5, name: 'Q&A' },
    // Add more channels for community 4
    ],
  5: [
    { id: 1, name: 'General Discussion' },
    { id: 2, name: 'Project Updates' },
    { id: 3, name: 'Learning Resources' },
    { id: 4, name: 'Community Announcements' },
    { id: 5, name: 'Help & Support' },
    // Add more channels for community 5
    ],
    
  
  
  // Add more channels for other communities
};

const Communities = () => {
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState({
    1: {
      1: [
        { id: 1, author: 'John', content: 'Hey everyone! What\'s the latest in web dev?', timestamp: '2:13 PM', avatar: '🧑‍💻' },
        { id: 2, author: 'Sarah', content: 'I\'ve been exploring Svelte lately. Anyone else tried it?', timestamp: '2:14 PM', avatar: '👩‍💻' },
        { id: 3, author: 'Mike', content: 'Svelte is great! I love its simplicity.', timestamp: '2:15 PM', avatar: '👨‍💻' },
        { id: 4, author: 'Emily', content: 'Has anyone worked with WebAssembly? Thoughts?', timestamp: '2:17 PM', avatar: '👩‍🔬' },
        { id: 5, author: 'David', content: 'WebAssembly is powerful but has a learning curve.', timestamp: '2:19 PM', avatar: '🧑‍🔬' },
      ],
      2: [
        { id: 1, author: 'Alice', content: 'Check out this new project I\'m working on!', timestamp: '3:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Bob', content: 'Looks interesting, Alice! What tech stack are you using?', timestamp: '3:05 PM', avatar: '👨‍💻' },
        { id: 3, author: 'Alice', content: 'I\'m using React and Node.js.', timestamp: '3:10 PM', avatar: '👩‍💻' },
      ],
      3: [
        { id: 1, author: 'Charlie', content: 'Here are some great resources for learning Python.', timestamp: '4:00 PM', avatar: '👨‍💻' },
        { id: 2, author: 'Dana', content: 'Thanks, Charlie! I\'ve been looking for good Python tutorials.', timestamp: '4:05 PM', avatar: '👩‍💻' },
      ],
      4: [
        { id: 1, author: 'Eve', content: 'Community meeting tomorrow at 10 AM.', timestamp: '5:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Frank', content: 'Got it, Eve. I\'ll be there.', timestamp: '5:05 PM', avatar: '👨‍💻' },
      ],
      5: [
        { id: 1, author: 'Grace', content: 'Can someone help me with this bug I\'m facing?', timestamp: '6:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Heidi', content: 'Sure, Grace. What seems to be the problem?', timestamp: '6:05 PM', avatar: '👨‍💻' },
      ],
    },
    2: {
      1: [
        { id: 1, author: 'John', content: 'Hey everyone! What\'s the latest in web dev?', timestamp: '2:13 PM', avatar: '🧑‍💻' },
        { id: 2, author: 'Sarah', content: 'I\'ve been exploring Svelte lately. Anyone else tried it?', timestamp: '2:14 PM', avatar: '👩‍💻' },
        { id: 3, author: 'Mike', content: 'Svelte is great! I love its simplicity.', timestamp: '2:15 PM', avatar: '👨‍💻' },
        { id: 4, author: 'Emily', content: 'Has anyone worked with WebAssembly? Thoughts?', timestamp: '2:17 PM', avatar: '👩‍🔬' },
        { id: 5, author: 'David', content: 'WebAssembly is powerful but has a learning curve.', timestamp: '2:19 PM', avatar: '🧑‍🔬' },
      ],
      2: [
        { id: 1, author: 'Alice', content: 'Check out this new project I\'m working on!', timestamp: '3:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Bob', content: 'Looks interesting, Alice! What tech stack are you using?', timestamp: '3:05 PM', avatar: '👨‍💻' },
        { id: 3, author: 'Alice', content: 'I\'m using React and Node.js.', timestamp: '3:10 PM', avatar: '👩‍💻' },
      ],
      3: [
        { id: 1, author: 'Charlie', content: 'Here are some great resources for learning Python.', timestamp: '4:00 PM', avatar: '👨‍💻' },
        { id: 2, author: 'Dana', content: 'Thanks, Charlie! I\'ve been looking for good Python tutorials.', timestamp: '4:05 PM', avatar: '👩‍💻' },
      ],
      4: [
        { id: 1, author: 'Eve', content: 'Community meeting tomorrow at 10 AM.', timestamp: '5:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Frank', content: 'Got it, Eve. I\'ll be there.', timestamp: '5:05 PM', avatar: '👨‍💻' },
      ],
      5: [
        { id: 1, author: 'Grace', content: 'Can someone help me with this bug I\'m facing?', timestamp: '6:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Heidi', content: 'Sure, Grace. What seems to be the problem?', timestamp: '6:05 PM', avatar: '👨‍💻' },
      ],
    },
    3: {
      1: [
        { id: 1, author: 'John', content: 'Hey everyone! What\'s the latest in web dev?', timestamp: '2:13 PM', avatar: '🧑‍💻' },
        { id: 2, author: 'Sarah', content: 'I\'ve been exploring Svelte lately. Anyone else tried it?', timestamp: '2:14 PM', avatar: '👩‍💻' },
        { id: 3, author: 'Mike', content: 'Svelte is great! I love its simplicity.', timestamp: '2:15 PM', avatar: '👨‍💻' },
        { id: 4, author: 'Emily', content: 'Has anyone worked with WebAssembly? Thoughts?', timestamp: '2:17 PM', avatar: '👩‍🔬' },
        { id: 5, author: 'David', content: 'WebAssembly is powerful but has a learning curve.', timestamp: '2:19 PM', avatar: '🧑‍🔬' },
      ],
      2: [
        { id: 1, author: 'Alice', content: 'Check out this new project I\'m working on!', timestamp: '3:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Bob', content: 'Looks interesting, Alice! What tech stack are you using?', timestamp: '3:05 PM', avatar: '👨‍💻' },
        { id: 3, author: 'Alice', content: 'I\'m using React and Node.js.', timestamp: '3:10 PM', avatar: '👩‍💻' },
      ],
      3: [
        { id: 1, author: 'Charlie', content: 'Here are some great resources for learning Python.', timestamp: '4:00 PM', avatar: '👨‍💻' },
        { id: 2, author: 'Dana', content: 'Thanks, Charlie! I\'ve been looking for good Python tutorials.', timestamp: '4:05 PM', avatar: '👩‍💻' },
      ],
      4: [
        { id: 1, author: 'Eve', content: 'Community meeting tomorrow at 10 AM.', timestamp: '5:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Frank', content: 'Got it, Eve. I\'ll be there.', timestamp: '5:05 PM', avatar: '👨‍💻' },
      ],
      5: [
        { id: 1, author: 'Grace', content: 'Can someone help me with this bug I\'m facing?', timestamp: '6:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Heidi', content: 'Sure, Grace. What seems to be the problem?', timestamp: '6:05 PM', avatar: '👨‍💻' },
      ],
    },
    4: {
      1: [
        { id: 1, author: 'John', content: 'Hey everyone! What\'s the latest in web dev?', timestamp: '2:13 PM', avatar: '🧑‍💻' },
        { id: 2, author: 'Sarah', content: 'I\'ve been exploring Svelte lately. Anyone else tried it?', timestamp: '2:14 PM', avatar: '👩‍💻' },
        { id: 3, author: 'Mike', content: 'Svelte is great! I love its simplicity.', timestamp: '2:15 PM', avatar: '👨‍💻' },
        { id: 4, author: 'Emily', content: 'Has anyone worked with WebAssembly? Thoughts?', timestamp: '2:17 PM', avatar: '👩‍🔬' },
        { id: 5, author: 'David', content: 'WebAssembly is powerful but has a learning curve.', timestamp: '2:19 PM', avatar: '🧑‍🔬' },
      ],
      2: [
        { id: 1, author: 'Alice', content: 'Check out this new project I\'m working on!', timestamp: '3:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Bob', content: 'Looks interesting, Alice! What tech stack are you using?', timestamp: '3:05 PM', avatar: '👨‍💻' },
        { id: 3, author: 'Alice', content: 'I\'m using React and Node.js.', timestamp: '3:10 PM', avatar: '👩‍💻' },
      ],
      3: [
        { id: 1, author: 'Charlie', content: 'Here are some great resources for learning Python.', timestamp: '4:00 PM', avatar: '👨‍💻' },
        { id: 2, author: 'Dana', content: 'Thanks, Charlie! I\'ve been looking for good Python tutorials.', timestamp: '4:05 PM', avatar: '👩‍💻' },
      ],
      4: [
        { id: 1, author: 'Eve', content: 'Community meeting tomorrow at 10 AM.', timestamp: '5:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Frank', content: 'Got it, Eve. I\'ll be there.', timestamp: '5:05 PM', avatar: '👨‍💻' },
      ],
      5: [
        { id: 1, author: 'Grace', content: 'Can someone help me with this bug I\'m facing?', timestamp: '6:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Heidi', content: 'Sure, Grace. What seems to be the problem?', timestamp: '6:05 PM', avatar: '👨‍💻' },
      ],
    },
    5: {
      1: [
        { id: 1, author: 'John', content: 'Hey everyone! What\'s the latest in web dev?', timestamp: '2:13 PM', avatar: '🧑‍💻' },
        { id: 2, author: 'Sarah', content: 'I\'ve been exploring Svelte lately. Anyone else tried it?', timestamp: '2:14 PM', avatar: '👩‍💻' },
        { id: 3, author: 'Mike', content: 'Svelte is great! I love its simplicity.', timestamp: '2:15 PM', avatar: '👨‍💻' },
        { id: 4, author: 'Emily', content: 'Has anyone worked with WebAssembly? Thoughts?', timestamp: '2:17 PM', avatar: '👩‍🔬' },
        { id: 5, author: 'David', content: 'WebAssembly is powerful but has a learning curve.', timestamp: '2:19 PM', avatar: '🧑‍🔬' },
      ],
      2: [
        { id: 1, author: 'Alice', content: 'Check out this new project I\'m working on!', timestamp: '3:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Bob', content: 'Looks interesting, Alice! What tech stack are you using?', timestamp: '3:05 PM', avatar: '👨‍💻' },
        { id: 3, author: 'Alice', content: 'I\'m using React and Node.js.', timestamp: '3:10 PM', avatar: '👩‍💻' },
      ],
      3: [
        { id: 1, author: 'Charlie', content: 'Here are some great resources for learning Python.', timestamp: '4:00 PM', avatar: '👨‍💻' },
        { id: 2, author: 'Dana', content: 'Thanks, Charlie! I\'ve been looking for good Python tutorials.', timestamp: '4:05 PM', avatar: '👩‍💻' },
      ],
      4: [
        { id: 1, author: 'Eve', content: 'Community meeting tomorrow at 10 AM.', timestamp: '5:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Frank', content: 'Got it, Eve. I\'ll be there.', timestamp: '5:05 PM', avatar: '👨‍💻' },
      ],
      5: [
        { id: 1, author: 'Grace', content: 'Can someone help me with this bug I\'m facing?', timestamp: '6:00 PM', avatar: '👩‍💻' },
        { id: 2, author: 'Heidi', content: 'Sure, Grace. What seems to be the problem?', timestamp: '6:05 PM', avatar: '👨‍💻' },
      ],
    },
    // ... other communities
  });

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;

    const newMessageObj = {
      id: Date.now(),
      author: 'You', // Replace with the actual user
      content: newMessage,
      timestamp: new Date().toLocaleTimeString(),
      avatar: '👤', // Replace with the actual user's avatar
    };

    setMessages(prevMessages => ({
      ...prevMessages,
      [selectedCommunity]: {
        ...prevMessages[selectedCommunity],
        [selectedChannel]: [...prevMessages[selectedCommunity][selectedChannel], newMessageObj],
      },
    }));

    setNewMessage('');
  };

  return (
    <div className="communities-page">
      <div className="introduction-section">
        <h1>Welcome to Our Communities</h1>
        <p>Our communities are a great place to connect with like-minded individuals, share knowledge, and collaborate on projects. Whether you're into web development, data science, or any other tech field, you'll find a community here that suits your interests.</p>
        <div className="community-cards">
          {communities.map((community) => (
            <div key={community.id} className="community-card">
              <h3>{community.name}</h3>
              <p>{community.members} members</p>
            </div>
          ))}
        </div>
      </div>
      <div className="communities">
        <div className="communities-sidebar">
          <div className="search-bar">
            <FaSearch />
            <input type="text" placeholder="Search communities" />
          </div>
          <button className="create-community">
            <FaPlusCircle /> Create Community
          </button>
          <div className="community-list">
            {communities.map((community) => (
              <div
                key={community.id}
                className={`community-item ${selectedCommunity === community.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCommunity(community.id);
                  setSelectedChannel(null); // Reset selected channel when changing community
                }}
              >
                <div className="community-icon">{community.name[0]}</div>
                <div className="community-info">
                  <h3>{community.name}</h3>
                  <p>{community.members} members</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="community-main">
          {selectedCommunity ? (
            <>
              <div className="community-header">
                <h2>{communities.find(c => c.id === selectedCommunity).name}</h2>
                <div className="member-count">
                  <FaUserFriends />
                  <span>{communities.find(c => c.id === selectedCommunity).members} members</span>
                </div>
              </div>
              <div className="community-content">
                <div className="channels">
                  <h3>Channels</h3>
                  {channels[selectedCommunity]?.map((channel) => (
                    <div 
                      key={channel.id} 
                      className={`channel-item ${selectedChannel === channel.id ? 'active' : ''}`}
                      onClick={() => setSelectedChannel(channel.id)}
                    >
                      <FaHashtag />
                      <span>{channel.name}</span>
                    </div>
                  ))}
                </div>
                <div className="chat-area">
                  {selectedChannel && (
                    <>
                      <div className="messages">
                        {messages[selectedCommunity]?.[selectedChannel]?.map((message) => (
                          <div key={message.id} className="message">
                            <div className="message-avatar">{message.avatar}</div>
                            <div className="message-content">
                              <div className="message-header">
                                <span className="message-author">{message.author}</span>
                                <span className="message-timestamp">{message.timestamp}</span>
                              </div>
                              <div className="message-text">{message.content}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="message-input">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Type a message..."
                        />
                        <button onClick={handleSendMessage}>Send</button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="no-community-selected">
              <h2>Welcome to Communities</h2>
              <p>Select a community to start chatting and collaborating with other members.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communities;
