import React from 'react'
import './Chat.css'
// import ChatHeader from './ChatHeader'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container className="chat">
        <Header>
             {/* <ChatHeader /> */}
             <Channel>
                <ChannelName>
                    # Clever
                </ChannelName>
                <ChannelInfo>
                    General channel for Profit with Javascript
                </ChannelInfo>
             </Channel>
             <ChannelDetails>
                    <div>
                    Details
                    </div>
                    <Info>

                         <InfoOutlinedIcon />
                    </Info>
             </ChannelDetails>
        </Header>
           
        <MessageContainer>
          <ChatMessage />
        </MessageContainer>
        <ChatInput />

        
        </Container>
    )
}

export default Chat

const Container = styled.div`
display: grid;
grid-template-rows: 64px auto min-content;
`
const Channel = styled.div`

`
const ChannelDetails = styled.div`
display: flex;
align-items: center;
color: #ababab;

`
const Info = styled(InfoOutlinedIcon)`
    margin-left: 10px;
`
const ChannelName = styled.div`
font-weight: 700;
`

const ChannelInfo = styled.div`
font-weight: 400;
color: #ababab;
font-size: 13px;
margin-top: 8px;
`

const Header = styled.div`
padding-left: 20px;
padding-right: 20px;
display: flex;
align-items: center;
border-bottom: 1px solid rgba(83, 39, 83, .13);
justify-content: space-between;
`
const MessageContainer = styled.div`

`



