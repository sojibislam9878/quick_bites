// AdminChat.js
'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';
import io from 'socket.io-client';

const socket = io('https://quick-bites-ljsf.onrender.com');

const AdminChat = () => {
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [users, setUsers] = useState([]);
    const data = useSession()?.data?.user //for user data from when user is logged in


    console.log(data)

    useEffect(() => {
        // Listen for messages from users
        socket.on('admin_receive', ({ socketId, userEmail, msg, userName, userImage }) => {
            setChatHistory((prev) => [...prev, { email: userEmail, name: userName, image: userImage, id: socketId, msg: msg }]);
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
            setChatHistory((prev) => [...prev, { msg: message, role: 'admin', image: data?.image, name: data?.name }]);
            setMessage('');
        }
    };

    const getChatHistory = async (data) => {
        setSelectedUserId(data)
        console.log(data)

        // await axios.post('/api/adminChatHistory',{data})
        // .then((response) => {
        //     console.log(response.data);

        // })

    }
    console.log(chatHistory, 'users');


    return (
        <div className='w-full h-full border relative border-gray-400'>
            <div className='p-3 w-full flex gap-5 border items-center border-gray-300' >

                <Image src={`${data?.image}`} className='rounded-full' width={60} height={60} />
                <div>
                    <p className='font-medium font-lobster'>{data?.name}</p>
                    <p className='text-xs font-poppins font-normal'>{data?.email}</p>
                </div>
            </div>
            {/* <div>
                <h4>Users</h4>
                {/* {users.map((user) => (
                    <div key={user.socketId} onClick={() => getChatHistory(user.socketId)}>
                        {user.userEmail}
                    </div>
                ))} */}
            {/* </div>  */}
          


                <div className='flex-1 p-0 space-y-4 h-[74%] overflow-y-auto'>
                    {/* <h4>Chat History</h4> */}
                    {chatHistory?.map((data,index) =>
                        <div key={index} className={`${data?.role == 'admin' ? 'bg-blue-500 flex relative left-[65%] ' : 'justify-start flex relative left-[5%] bg-gray-300'} flex w-fit mt-3 gap-5  rounded-box p-2 items-center`}>
                            <Image src={`${data?.image}`} className='rounded-full' width={60} height={60} />
                            <div className={`${data?.role == 'admin' ? ' text-white font-lobster' : 'font-mono'}`}>
                                <p className='font-bold' >{data?.name}</p>
                                <p>{data?.msg}</p>
                            </div>
                            <div className={` bg-blue-500 p-2 rounded-lg text-white`}>
                                <button className={`${data?.role == 'admin' ? 'hidden' : 'visible'}`} onClick={() => getChatHistory(data?.id)}>Replay</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="border-t absolute bottom-0 w-full  border-gray-200 ">
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-1 border rounded-lg p-3 outline-none focus:border-blue-400"
                            placeholder="Type your message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button
                            onClick={sendMessageToUser}
                            className="ml-2 px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                            <IoMdSend  />
                        </button>
                    </div>
                </div>


        </div>
    );
};

export default AdminChat;
