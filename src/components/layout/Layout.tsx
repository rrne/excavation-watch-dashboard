import React from 'react';
import TopBar from './TopBar';
import styled from 'styled-components';

const StyledApp = styled.div`
    width:100%;
    height:100vh;
    overflow: hidden;
`
const StyledMain = styled.main`
    width: 100%;
    height: calc(100% - 80px);
`
const Layout = ({children}: {children:JSX.Element}): JSX.Element => {
  return (
    <StyledApp>
        <TopBar />
        <StyledMain>
            {children}
        </StyledMain>
    </StyledApp>
  )
}

export default Layout