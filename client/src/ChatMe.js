import styled from "styled-components"

const ChatMe = ({content}) => {
    return (
                < MyChatWrapper>
                    <div className="time">
                        12:09
                    </div>
                    <div className="myChat">
                        <span>{content}</span>
                    </div>
                </MyChatWrapper>)
};
const MyChatWrapper = styled.div`
  .time {
    width: 240px;
    text-align: right;
    position: relative;
    font-size: 8px;
    margin-top: -25px;
    display: none;
  }

  :hover {
    .time {
      color: var(--gray-20);
      display: block;
    }

    .myChat {
      margin-top: 9px;
    }
  }

  .myChat {
    margin-top: 0;
  }

  border: 1px solid var(--beige-00);
  border-radius: var(--radius-20);
  background-color: var(--green);
  max-width: 270px;
  font-size: 12px;
  color: var(--beige-00);
  padding: 8px 8px 8px 16px;
  line-height: 16px;
  margin-top: 18px;
  margin-left: calc(420px - 270px);
`


export default ChatMe;