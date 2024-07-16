import React, { useState, useRef } from 'react';
import axios from 'axios';

const Chating = () => {
  const [chatLog, setChatLog] = useState([]);
  const [input, setInput] = useState('');
  const chatLogRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // 사용자 채팅을 로그에 추가
    const newChatLog = [...chatLog, { role: 'user', content: input }];
    setChatLog(newChatLog);

    // 대화 로그에 system 메시지 추가
    const messages = [
      { role: 'system', content: 'You are a friendly and professional tour guide.' },
      ...newChatLog.map(chat => ({
        role: chat.role,
        content: chat.content
      }))
    ];

    // API 요청 전에 messages 배열 로그 출력
    console.log('Sending messages:', messages);

    // OpenAI API 요청 보내기
    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 150,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const aiResponse = response.data.choices[0].message.content.trim();
      
      // AI 응답을 로그에 추가
      setChatLog([...newChatLog, { role: 'ai', content: aiResponse }]);
    } catch (error) {
      console.error('Error sending message:', error);
    }

    // 입력 필드 초기화
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='map-info-chating'>
      <div className='chat-log' ref={chatLogRef}>
        {chatLog.map((chat, index) => (
          <p key={index} className={chat.role === 'user' ? 'chat-log-user' : 'chat-log-ai'}>
            {chat.content}
          </p>
        ))}
      </div>

      <div className='chat-input-div'>
        <input 
          className='chat-input' 
          placeholder="메시지" 
          value={input} 
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button 
          className='chat-enterBtn' 
          onClick={handleSendMessage}
        >
          &#10142;
        </button>
      </div>
    </div>
  );
};

export default Chating;
