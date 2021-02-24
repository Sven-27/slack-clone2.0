import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

function ChatHeader() {
    return (
        <Container>
            <ChannelLeft>
                <ChannelName>
                    <h4># Profit with Javascript</h4>
                    <StarBorderIcon />
                </ChannelName>
                <ChannelDescription>
                    <p>General channel for Javascript</p>
                </ChannelDescription>
                </ChannelLeft>
                <ChannelRight>
                <ChannelDetails>
                    <h3>Details</h3>
                </ChannelDetails>
                <ChannelInfo>
                    <InfoOutlinedIcon />
                </ChannelInfo>
                </ChannelRight>
        </Container>
    )
}

export default ChatHeader

const Container = styled.div`
border-bottom: 1px solid #d2d2d2;
display: flex;
justify-content: space-between;
`

const ChannelLeft = styled.div`
padding: 15px 19px;
`
const ChannelName = styled.div`
display: flex;

h4{
    margin-bottom: 10px;
    padding-right: 10px;
}

.MuiSvgIcon-root{
    width: 20px;
    height: 20px;
}
`
const ChannelDescription = styled.div`
p{
color: #bdbdbd;
}
`

const ChannelRight = styled.div`
display: flex;
align-items: center;
padding: 0 19px;
`
const ChannelDetails = styled.div`
h3{
    font-size: 24px;
    margin-right: 10px;
    font-weight: 200;
}
`
const ChannelInfo = styled.div`
.MuiSvgIcon-root{
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
}
`
