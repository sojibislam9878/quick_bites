import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import { useSession } from 'next-auth/react';
import { MdOutlineCancelScheduleSend } from 'react-icons/md';

const socket = io('http://localhost:4000');
;

const ChatWindow = ({setOpen}) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  console.log(message)
  const data =useSession()?.data?.user //for user data from when user is logged in




  

  useEffect(() => {
    socket.emit('join', {data});

    // Receive previous chat history
    socket.on('chat_history', (messages) => {
        setChatHistory(messages.map(msg => msg));
    });

    // Receive new messages from the admin
    socket.on('message_from_admin', ({message,role}) => {
      console.log('message',message);
      
        setChatHistory((prev) => [...prev, {message,role}]);
    });

    return () => {
        socket.off('chat_history');
        socket.off('message_from_admin');
    };
  }, []);
console.log(chatHistory);

  const handleSendMessage = () => {
    if (message) {

      socket.emit('user_message', { msg: message, name: data?.name,image:data?.image });
      setChatHistory((prev) => [...prev, {message}]);

      setMessage('');
    }
  
  };

  return (
    <div className='z-auto'>
      <div className="flex flex-col fixed top-24 right-4 h-3/4 max-w-md mx-auto bg-white shadow-lg">
      {/* Chat Header */}
      <div className="py-4  items-center  flex justify-between z-50 px-6 bg-gray-100 font-semibold border-b border-gray-200">
        Chat with Admin
        <button className='text-xl ' onClick={()=>setOpen(false)}>
          <MdOutlineCancelScheduleSend />
        </button>
      </div>

      {/* Messages Section */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {chatHistory.map((data, index) => (
          <ChatMessage key={index} role={data?.role} text={data?.message} timestamp={data.timestamp} />
        ))}
      </div>

      {/* Chat Input */}
      <div className="border-t border-gray-200 p-4">
      <div className="flex">
        <input
          type="text"
          className="flex-1 border rounded-lg p-2 outline-none focus:border-blue-400"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Send
        </button>
      </div>
    </div>
    </div>

      {/* <ChatInput></ChatInput> */}
     
    </div>
  );
};

export default ChatWindow;