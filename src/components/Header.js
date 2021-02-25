import React, { useState } from 'react'
import './Header.css'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "../Themes"

function Header() {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
  }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <Container>
        <button onClick={themeToggler}>Switch Theme</button>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." /> 
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    Sven
                </Name>
                <UserImage>
                    <img src="https://i.imgur.com/6VBx3io.png" alt="Avatar" />
                </UserImage>
            </UserContainer>
        </Container>
        </>
    </ThemeProvider>
    )
}

export default Header

const Container = styled.div`
background: #350d36;
color: white;
display: flex;
align-items: center;
justify-content: center;
position: relative;
z-index: 10;

box-shadow: 0 1px 0 0 rgb(255 255 255);

button{
    position: absolute;
    left: 19px;
    padding: 3px 5px;
    color: white;
    background: #350d36;
    border: white;
    cursor: pointer;
}
`

const Main = styled.div`
display: flex;
margin-right: 16px;
margin-left: 16px;
`

const SearchContainer = styled.div`
min-width: 400px;
margin-left: 16px;
margin-right: 16px;

`

const Search = styled.div`
width: 100%;
box-shadow: inset 0 0 0 1px rgb(104 74 104);
border-radius: 6px;
display: flex;
align-items: center;

input{
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    padding-top: 4px;
    padding-bottom: 4px;
}
`

const UserContainer = styled.div`
display: flex;
align-items: center;
padding-right: 16px;
position: absolute;
right: 0;
`

const Name = styled.div`
padding-right: 16px;
`

const UserImage = styled.div`
width: 28px;
height: 28px;
border: 2px solid white;
border-radius: 3px;

img{
    width: 100%;
}
`
