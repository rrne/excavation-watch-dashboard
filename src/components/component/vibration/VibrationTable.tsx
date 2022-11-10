import vibrationTableData from '@src/data/vabrationtable.json';
import { Table, Pagination  } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';

const StyledVibrationTable = styled.div`
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
    first: string;
    second: string;
    count: number;
    sensor: string;
    location: string;
    equip: string;
    equipName: string;
    xy: string;
    time: string;
    ect?: string;
}

const columns: ColumnsType<DataType> = [
    {
      title: '1차사업소',
      dataIndex: 'first',
    },
    {
      title: '2차사업소',
      dataIndex: 'second',
    },
    {
      title: '단말기 개수',
      dataIndex: 'count',
    },
    {
      title: '진동센서 No.',
      dataIndex: 'sensor',
    },
    {
      title: '위치정보',
      dataIndex: 'location',
    },
    {
      title: '토목설비',
      dataIndex: 'equip',
    },
    {
      title: '설비명',
      dataIndex: 'equipName',
    },
    {
      title: '위치정보 (X/Y좌표)',
      dataIndex: 'xy',
    },
    {
      title: "설치일",
      dataIndex: 'time',
    },
    {
      title: '비고',
      dataIndex: 'ect',
    }
  ];

  const data:DataType[] =[...vibrationTableData]

const VibrationTable = () => {
    const router = useRouter();

    const onRowClick = (value:DataType) => {
        router.push({pathname:'/vibration/modify',
        query:{data : JSON.stringify(value)}
      }, "/vibration/modify")
    }
    return (
        <StyledVibrationTable>
        <Table columns={columns} dataSource={data} pagination={{pageSize:15, position: ["bottomCenter"]}}  
        onRow={(record, rowIndex) => {return {onClick: () => {onRowClick(record)}}}}/>
    </StyledVibrationTable>
    )
}

export default VibrationTable;