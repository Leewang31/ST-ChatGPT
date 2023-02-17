import styled from "styled-components";
const ChatYou = ({userId,content}) => {
    return (
        <Chatwrapper>
            <div className="time">12:09</div>
            <img src={require('./img/cat.png')} />
            <TextWrapper>
                <div className="name">소용돌이</div>
                <div className="content ">
                    <span>{content}</span>
                </div>
            </TextWrapper>
        </Chatwrapper>
    );
};

const Chatwrapper = styled.div`
  border: 1px solid var(--beige-00);
  border-radius: var(--radius-20);
  background-color: var(--green);
  max-width: 270px;
  display: flex;
  align-items: flex-start;
  font-size: 12px;
  color: var(--beige-00);
  padding: 8px;
  line-height: 16px;
  margin-top: 18px;
  .time {
    position: absolute;
    font-size: 8px;
    margin-top: -25px;
    margin-left: 10px;
    display: none;
  }
  :hover {
    .time {
      color: var(--gray-20);
      display: block;
    }
  }
  > img {
    border-radius: var(--radius-30);
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > .name {
    font-size: 10px;
  }
`;

export default ChatYou;