import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import FormatSizeIcon from '@material-ui/icons/FormatSize';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewListIcon from '@material-ui/icons/ViewList';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
                <form>
            <div>
                    <input type="text" placeholder="Message here..." />
            </div>
               <div>
               <Left>
                    <FlashOnIcon />
                    <FormatBoldIcon />
                    <FormatItalicIcon />
                    <StrikethroughSIcon />
                    <CodeIcon />
                    <LinkIcon />
                    <FormatListNumberedIcon />
                    <FormatListBulletedIcon />
                    <ViewListIcon />
                    <DeveloperModeIcon />
               </Left>
                <Right>
                <FormatSizeIcon />
                <AlternateEmailIcon />
                <EmojiEmotionsIcon />
                <AttachFileIcon />
                    <SendButton>
                    <Send />
                    </SendButton>
                </Right>
                </div>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
padding-left: 20px;
padding-right: 20px;
padding-bottom: 24px;

`

const InputContainer = styled.div`
border: 1px solid rgb(0, 150,255);
border-radius: 4px;

form{
    display: flex;
    flex-direction: column;
    height: 80px;

    padding-left: 10px;
    input{
        flex: 1;
        border: none;
        font-size: 13px;
        outline: none;
        width: 100%;
        color: #ababab;
        background: transparent;
        display: flex;
        margin-top: 8px;
        padding: 4px 0 4px 7px;
    }
    div{
        display: flex;
    }
}
`

const Left = styled.div`
flex: 0.5;

padding-left: 4px;
display: flex;
align-items: center;
.MuiSvgIcon-root{
    padding: 3px;
    margin: 3px;
    :hover{
        background: #ddd;
        cursor: pointer
    }
}
`

const Right = styled.div`
flex: 0.5;
display: flex;
align-items: center;
justify-content: flex-end;

.MuiSvgIcon-root{
    padding: 3px;
    margin: 3px;
    :hover{
        background: #ddd;
        cursor: pointer
    }
}
`

const SendButton = styled.div`
width: 18px;
border-radius: 2px;
width: 32px;
height: 32px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 5px;
margin-bottom: 3px;
cursor: pointer;

.MuiSvgIcon-root{
    width: 32px;
    height: 32px;
    padding: 5px;
    border-radius: 4px;
    background: rgb(0,150,255);
    :hover{
    background: #4900ff;
}


}
`

const Send = styled(SendIcon)`
color: #d9d9d9;


`

