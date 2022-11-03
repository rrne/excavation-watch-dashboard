import type { NextPage } from 'next';
import styled from "@emotion/styled"
import { InstallStatus, NoticeComp, QandAComp, InfoComp } from '@src/components/component/dashboard/BottomComp';
import MapComp from '@src/components/component/dashboard/Map';

import { Card } from '@src/components/component/Card';

import RealtimeEventTable from '@src/components/component/dashboard/RealtimeEventTable';
import VibrationSensorTable from '@src/components/component/dashboard/VibrationSensorTable';

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
  .mapbox{
    width: 32%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid #E4E5E7;
    box-shadow: 0 0 4px rgba(0,0,0,0.1);
  }
  .top-table-box{
    width: calc(68% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .table-pannel{
      width: 100%;
      height: calc(50% - 5px);
    }
  }
`

const Home: NextPage = () => {
  return (
    <StyledHome>
      <div className="top">
        <div className="mapbox">
          <MapComp />
        </div>
        <div className="top-table-box">
          <div className="table-pannel">
            <Card><VibrationSensorTable/></Card>
            </div>
          <div className="table-pannel">
          <Card><RealtimeEventTable/></Card>
          </div>
        </div>
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
