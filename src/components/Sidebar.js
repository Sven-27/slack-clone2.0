import React from 'react'
import './Sidebar.css'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { sidebarItemsData } from '.././data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase'
import {useHistory} from 'react-router-dom'

function Sidebar(props) {
    const history = useHistory()

const goToChannel = (id) =>{
    if(id){
        console.log(id)
        history.push(`/room/${id}`)
    }
}

    const addChannel = () => {
            const promptName = prompt("Enter channel name")
            if(promptName){
                db.collection('rooms').add({
                    name: promptName
                })
            }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    CleverProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
            {
                sidebarItemsData.map(item => (
                <MainChannelItem>
                    {item.icon}
                    {item.text}
                </MainChannelItem>
                ))
            }

            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                <AddIcon onClick={addChannel} />
                </NewChannelContainer>
                <ChannelsList>
                {
                    props.rooms.map(item => (
                        <Channel onClick={()=>goToChannel(item.id)}>
                            # {item.name}
                        </Channel>
                    ))
                }
                              
                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
background: #000;
color: #B80000;
margin-top: 0;
border-right: 1px solid #720000;
`

const WorkspaceContainer = styled.div`
color: #E30000;
height: 64px;
display: flex;
padding-left: 19px;
align-items: center;
padding-left: 19px;
justify-content: space-between;
 border-bottom: 1px solid #720000; 
`

const Name = styled.div`

`

const NewMessage = styled.div`
width: 36px;
height: 36px;
background: #111;
color: inherit;
fill: #444;
display: flex;
justify-content: center;
align-items: center;
border: 1px solid #720000;
border-radius: 50%;
margin-right: 20px;
cursor: pointer;
`

const MainChannels = styled.div`
padding-top: 20px;
`

const MainChannelItem = styled.div`
color: inherit;
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items: center;
padding-left: 19px;
cursor: pointer;
:hover{
    background: #444;
}
`

const ChannelsContainer = styled.div`
color: #E30000;
margin-top: 10px;
`

const NewChannelContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 28px;
padding-left: 19px;
padding-right: 12px;
`

const ChannelsList = styled.div`
display: flex;
padding-top: 10px;
flex-direction: column;
`

const Channel = styled.div`
color: inherit;
display: flex;
width: 100%;
height: 28px;
align-items: center;
padding-left: 19px;
padding-right: 10px;
cursor: pointer;
:hover{
    background: #444;
}

p{
    margin-right: 5px;
}
`

