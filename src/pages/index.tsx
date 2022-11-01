import type { NextPage } from 'next';

import styled from 'styled-components';
import { InstallStatus, NoticeComp, QandAComp, InfoComp } from '@src/components/component/dashboard/BottomComp';

const StyledHome = styled.section`
  padding:20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
  height:100%;
  .top{
    width: 100%;
    display: flex;
    gap: 10px;
    height: 70%;
  }
  .bottom{
    width: 100%;
    display: flex;
    gap: 10px;
    height: 30%;
  }
`

const Home: NextPage = () => {
  return (
    <StyledHome>
      <div className="top">
        <div className="mapbox"></div>
        <div className="tablebox"></div>
      </div>
      <div className="bottom">
      <InstallStatus/>
      <NoticeComp/>
      <QandAComp/>
      <InfoComp/>
      </div>
    </StyledHome>
  )
}

export default Home;
