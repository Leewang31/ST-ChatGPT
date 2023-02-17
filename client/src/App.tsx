import React from 'react';
import ChatList from "./ChatList";
import './main.css'
import styled from "styled-components";
function App() {
  return (
      <ChatWrapper>
          <ChatList/>
      </ChatWrapper>
  );
}

export default App;

const ChatWrapper = styled.div`
  display: flex;
  justify-content: center;
`