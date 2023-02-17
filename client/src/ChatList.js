import styled from "styled-components"
import ChatMe from "./ChatMe";
import ChatYou from './ChatYou'
import React, {useEffect, useState} from "react";
import axios from 'axios'
import {Configuration, OpenAIApi} from 'openai';

const ChatList = () => {
    const [data, setData] = useState(null)
    const [answer, setAnswer] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
        if(!isLoading){
        axios.get('http://localhost:3001/data').then(res => {
            setData(res.data)
        })
        }
    }, [isLoading])
    const [content, setContent] = useState('')
    const handlerSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/data', {
            'userId': "admin",
            'content': content
        }).then(()=>openaiFunc(content))
    }
    const onChange = (e) => {
        setContent(e.target.value)
    }

    const configuration = new Configuration({
        apiKey: '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',
    });
    const openai = new OpenAIApi(configuration);
const openaiFunc = async (content)=>{
    setIsLoading(true)
    await openai.createCompletion({
       model: "text-davinci-003",
       prompt: content,
       temperature: 0.7,
       max_tokens: 256,
       top_p: 1,
       frequency_penalty: 0,
       presence_penalty: 0,
   }).then((res)=>setAnswer(res.data.choices[0].text))
    await axios.post('http://localhost:3001/data',{'userId': "소용돌이",
        'content': answer}).then(()=>setIsLoading(false))
}
     return (
        <ChatListWrapper>
            <div className="flex">
                <WriteChat>
                    <textarea name='content' value={content} onChange={onChange}/>
                    <button onClick={handlerSubmit}>Send
                    </button>
                </WriteChat>
            </div>
            <ChatWrapper>
                {data && data.map((el, idx) => el.userId === 'admin' ? (<ChatMe key={idx} content={el.content}/>)
                    : (<ChatYou key={idx} content={el.content} userId={el.userId}/>))}
            </ChatWrapper>
        </ChatListWrapper>
    );
};

const ChatListWrapper = styled.div`
  background-color: var(--green);
  border-radius: var(--radius-10);
  width: calc(460px - 40px);
  padding: 16px 20px;
  margin: 16px 0 16px 0;
  height: 600px;
  display: flex;
  flex-direction: column-reverse;
  max-height: 635px;

  > .flex {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 16px;
  }

  *::-webkit-scrollbar {
    width: 8px; /* 스크롤바의 너비 */
  }

  *::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: rgba(255, 255, 255, 0.15); /* 스크롤바의 색상 */
    border-radius: 10px;
  }

  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2); /*스크롤바 뒷 배경 색상*/
  }
`;
const WriteChat = styled.form`

  border: 1px solid var(--beige-00);
  border-radius: var(--radius-20);
  background-color: var(--green);
  width: 100%;
  font-size: 12px;
  color: var(--beige-00);
  line-height: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding: 8px;

  > textarea {
    background-color: var(--green);

    border: none;
    color: var(--beige-00);
    width: 85%;
    max-height: 80px;
    resize: none;
    overflow: auto;
    padding: 8px;
  }

  > textarea:focus {
    outline: none;
  }

  > button {
    border-radius: var(--radius-20);
    background-color: var(--green);
    border: none;
    color: var(--beige-00);
    margin-top: 4px;

    :hover {
      cursor: pointer;
      color: var(--blue);
    }
  }
`;

const ChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

`;

export default ChatList;