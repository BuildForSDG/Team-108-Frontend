import React from 'react';


const FAKE_MSG_LIST = [
  {
    sender: 'Janeth Doe',
    text: 'Typing...',
    time: '10:23pm'
  },
  {
    sender: 'John Snow',
    text: "I've secured the $8.5million...",
    time: '10:23pm'
  },
  {
    sender: 'Bridget Doe',
    text: 'It was very important, but you....',
    time: '10:23pm'
  },
  {
    sender: 'Janeth Doe',
    text: "Never mind, i don't love you...",
    time: '10:23pm'
  },
  {
    sender: 'Janeth Doe',
    text: "I've secured the $8.5million...",
    time: '10:23pm'
  },
  {
    sender: 'Jeff Bezos',
    text: 'How about the $8.5million..',
    time: '10:23pm'
  }
];


const ChatList = () => (
    <div className={'chatlist-wrap'}>
      { FAKE_MSG_LIST.length !== 0
        ? FAKE_MSG_LIST.map((message, idx) => (
            <div key={idx} className={'chatlist'}>
              {/* image placeholder */}
              <div className={'sender-image--chatlist'}></div>
              <div>
                <h5>{message.sender}</h5>
                <small>{message.text}</small>
              </div>

              <div>
                <small>{message.time}</small>
              </div>
            </div>
        )) : <div><small>No chat history</small></div>
    }
    </div>
);


export default ChatList;
