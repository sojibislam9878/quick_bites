import React from 'react';
import { register, format } from 'timeago.js';
register('en_short', (number, index) => [
    ['just now', 'right now'],
    ['%s sec ago', 'in %s sec'],
    ['1 min ago', 'in 1 min'],
    ['%s mins ago', 'in %s mins'],
    ['1 hr ago', 'in 1 hr'],
    ['%s hrs ago', 'in %s hrs'],
    ['1 day ago', 'in 1 day'],
    ['%s days ago', 'in %s days'],
    ['1 wk ago', 'in 1 wk'],
    ['%s wks ago', 'in %s wks'],
    ['1 mo ago', 'in 1 mo'],
    ['%s mos ago', 'in %s mos'],
    ['1 yr ago', 'in 1 yr'],
    ['%s yrs ago', 'in %s yrs']
][index]);
const ChatMessage = ({ role, text, timestamp }) => {
  

  return (
    <div className={`flex ${role ==='admin' ? ' justify-start' : 'justify-end'}`}>
      <div className={`max-w-xs p-3 rounded-lg ${role ==='admin' ? 'bg-gray-200' : ' bg-blue-500 text-white'}`}>
        <p className="text-sm">{text}</p>
        <span className={`block mt-2 text-xs ${role ==='admin' ? 'text-gray-500':' text-slate-300'}`}>{format(timestamp,'en_short')}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
