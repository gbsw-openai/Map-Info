import React, { useState, useRef } from 'react';
import axios from 'axios';

const Chating = () => {
  const [chatLog, setChatLog] = useState([]); //채팅 로그 상태
  const [input, setInput] = useState(''); // 입력상태
  const chatLogRef = useRef(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return; // 공백 확인

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

    // 입력 필드 초기화
    setInput('');
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;

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
      setChatLog([...newChatLog, { role: 'assistant', content: aiResponse }]);

      setTimeout(() => {
        chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
      }, 100);
      
    } catch (error) {
      // 오류 발생 위치와 내용을 자세히 출력
      if (error.response) {
        // 서버가 응답을 반환한 경우
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
        console.error('Error response headers:', error.response.headers);
      } else if (error.request) {
        // 요청이 만들어졌지만 응답을 받지 못한 경우
        console.error('Error request:', error.request);
      } else {
        // 요청을 설정하는 중에 오류가 발생한 경우
        console.error('Error message:', error.message);
      }
      console.error('Error config:', error.config);
    }
  };

  const handleKeyPress = (e) => { // 엔터 버튼 감지
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className='map-info-chating'>
      <div className='chat-log' ref={chatLogRef}>
        {chatLog.map((chat, index) => (
          <div key={index} className={chat.role === 'user' ? 'chat-log-user' : 'chat-log-ai'}>
            {chat.content}
          </div>
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
