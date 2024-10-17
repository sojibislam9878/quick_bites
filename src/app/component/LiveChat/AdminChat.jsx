// AdminChat.js
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const AdminChat = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [users, setUsers] = useState([]);

    console.log(users)

    useEffect(() => {
        // Listen for messages from users
        socket.on('admin_receive', ({ socketId, userEmail, msg ,userName,userImage}) => {
            setChatHistory((prev) => [...prev, [userEmail, userName, userImage,socketId,msg]]);
            if (!users.find((user) => user.userEmail === userEmail)) {
                setUsers((prev) => [...prev, { socketId, userEmail }]);
            }
        });

        return () => {
            socket.off('admin_receive');
        };
    }, [users]);

    const sendMessageToUser = () => {
        console.log(selectedUserId)
        if (message.trim() && selectedUserId) {
            socket.emit('admin_message', { userId: selectedUserId, message });
            setChatHistory((prev) => [...prev, `Admin: ${message}`]);
            setMessage('');
        }
    };

    const getChatHistory= async (data)=>{
        setSelectedUserId(data)
        console.log(data)

        // await axios.post('/api/adminChatHistory',{data})
        // .then((response) => {
        //     console.log(response.data);
            
        // })
        
    }
    console.log(users,'users');
    

    return (
        <div>
            <h3>Admin Chat</h3>
            <div>
                <h4>Users</h4>
                {users.map((user) => (
                    <div key={user.socketId} onClick={() => getChatHistory(user.socketId)}>
                        {user.userEmail}
                    </div>
                ))}
            </div>

            <div>
                <h4>Chat History</h4>
                {chatHistory.map((msg, index) => (
                    <p key={index}>{msg}</p>
                ))}
            </div>

            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message to user"
            />
            <button onClick={sendMessageToUser} disabled={!selectedUserId}>Send to User</button>
        </div>
    );
};

export default AdminChat;
