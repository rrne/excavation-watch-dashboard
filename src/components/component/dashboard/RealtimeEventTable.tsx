import { Title } from '@src/components/component/Title';
import styled from "@emotion/styled"

const StyledRealtimeEventTable = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-box{
        width: 100%;
        height: calc(100% - 34px);
        border: 1px solid black;
    }
`
const RealtimeEventTable = () => {
    return (
        <StyledRealtimeEventTable>
            <Title title='실시간 진동감지 알람내역' date='2021-12-31 14:15' />
            <div className="table-box"></div>
        </StyledRealtimeEventTable>
    )
}

export default RealtimeEventTable;