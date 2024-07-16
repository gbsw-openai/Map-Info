import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const Chating = () => {
  // 채팅 로그 상태 초기화, 쿠키에서 데이터 가져오기
  const [chatLog, setChatLog] = useState(() => {
    const savedChatLog = Cookies.get('chatLog');
    return savedChatLog ? JSON.parse(savedChatLog) : [];
  });

  const [input, setInput] = useState(''); // 입력값 상태
  const chatLogRef = useRef(null); // 채팅 로그 참조

  // 입력값 변경 핸들러
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // 메시지 전송 핸들러
  const handleSendMessage = async () => {
    if (input.trim() === '') return; // 공백 메시지 확인

    const newChatLog = [...chatLog, { role: 'user', content: input }];
    setChatLog(newChatLog);

    setInput(''); // 입력값 초기화
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;

    // 메시지 배열 생성 (사용자 메시지와 시스템 메시지)
    const messages = [
      { role: 'system', content: 'You are a friendly and professional tour guide.' },
      ...newChatLog.map(chat => ({ role: chat.role, content: chat.content }))
    ];

    console.log('Sending messages:', messages);

    try {
      // OpenAI API를 통해 메시지 전송
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

      // AI의 응답을 채팅 로그에 추가
      const aiResponse = response.data.choices[0].message.content.trim();
      setChatLog([...newChatLog, { role: 'assistant', content: aiResponse }]);

      // 채팅창 스크롤 아래로 이동
      setTimeout(() => {
        chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
      }, 100);

      // 채팅 로그를 쿠키에 저장
      Cookies.set('chatLog', JSON.stringify([...newChatLog, { role: 'assistant', content: aiResponse }]), { expires: 7 });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  // 엔터 키 눌렀을 때 메시지 전송
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // 채팅 로그가 업데이트될 때마다 스크롤 아래로 이동
  useEffect(() => {
    chatLogRef.current.scrollTop = chatLogRef.current.scrollHeight;
  }, [chatLog]);

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
