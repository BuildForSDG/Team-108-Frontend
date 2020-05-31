import React from 'react';

import './Chat.css';
import ChatWall from './ChatWall';
import ChatList from './ChatList';
import SearchInput from '../search/SearchInput';
import DashboardTopHeader from '../dashboard/DashboardHeader';


class ChatContainer extends React.Component {
  render() {
    return (
      <section className={'messages-container'}>
        <div>
          <DashboardTopHeader headerText={'Messages'} />
          <SearchInput placeholder={'Search messages'} />
          <br />
          <ChatList />
        </div>

        <div className={'chat-messages'}>
          <ChatWall />
        </div>
      </section>
    );
  }
}


export default ChatContainer;
