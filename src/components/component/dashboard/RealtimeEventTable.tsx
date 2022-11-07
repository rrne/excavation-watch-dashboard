import { Title } from '@src/components/component/Title';
import styled from "@emotion/styled"
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

const StyledRealtimeEventTable = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .table-box{
        width: 100%;
        height: calc(100% - 34px);
        overflow: hidden;
    }
`

interface DataType {
    idx: number;
    first: string;
    second: string;
    sensor: string;
    location: string;
    engine: string;
    equip: string;
    time: string;
    count: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: '순번',
      dataIndex: 'idx',
    },
    {
      title: '1차사업소',
      dataIndex: 'first',
    },
    {
      title: '2차사업소',
      dataIndex: 'second',
    },
    {
      title: '센서No.',
      dataIndex: 'sensor',
    },
    {
      title: '위치정보',
      dataIndex: 'location',
    },
    {
      title: '토목설비',
      dataIndex: 'engine',
    },
    {
      title: '설비명',
      dataIndex: 'equip',
    },
    {
      title: '알람 발생시간',
      dataIndex: 'time',
    },
    {
      title: '횟수(1일간)',
      dataIndex: 'count',
    }
  ];
  
  const data: DataType[] = [
    {
        idx: 1,
        first: "경기북부",
        second: "직할",
        sensor: "경기북부05",
        location: "덕소S/S앞",
        engine: "관로",
        equip: "154kV 덕소-진건 T/L",
        time: "2021-12-31 14:15",
        count: "2회",
    },
    {
        idx: 2,
        first: "인천본부",
        second: "직할",
        sensor: "인천08",
        location: "부흥오거리",
        engine: "관로",
        equip: "154kV 부개-원미 T/L",
        time: "2021-12-31 13:47",
        count: "1회",
    },{
        idx: 3,
        first: "경기북부",
        second: "직할",
        sensor: "경기북부22",
        location: "왕숙천후",
        engine: "전력구",
        equip: "345kV 미금-성동 T/L",
        time: "2021-12-31 10:08",
        count: "1회",
    },{
        idx: 4,
        first: "경기북부",
        second: "고양전력지사",
        sensor: "경기북부28",
        location: "탄현역앞",
        engine: "관로",
        equip: "154kV 신파주-송포 T/L",
        time: "2021-12-31 09:54",
        count: "1회",
    },{
        idx: 5,
        first: "부산울산본부",
        second: "북부산전력지사",
        sensor: "부산울선12",
        location: "동서고가밑",
        engine: "관로",
        equip: "154kV 덕포-개금 T/L",
        time: "2021-12-31 08:01",
        count: "1회",
    },
  ];
  
const RealtimeEventTable = () => {
    return (
        <StyledRealtimeEventTable>
            <Title title='실시간 진동감지 알람내역' date='2021-12-31 14:15' />
            <div className="table-box">
                <Table columns={columns} dataSource={data} pagination={false} />;
            </div>
        </StyledRealtimeEventTable>
    )
}

export default RealtimeEventTable;