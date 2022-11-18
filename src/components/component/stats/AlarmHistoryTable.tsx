import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Button } from '@src/components/component/Button';
import SelectComp from '@src/components/component/Select'
import {useEffect, useState} from 'react';
import type { ColumnsType } from 'antd/es/table';
import vabrationData from '@src/data/vabrationSensor.json';
import { Table, DatePicker } from 'antd';
import historyData from '@src/data/alarmHistoryTable.json'

const { RangePicker } = DatePicker;

// style✨
const StyledAlarmHistoryTable = styled.div`
     width:100%;
    height: 100%;
    .top-box{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
                font-size: 16px;
                font-weight: 800;
                position: relative;}

        .filter-box{
            display: flex;
            gap: 10px;
            align-items: center;
            .title{
                font-size: 16px;
                font-weight: 600;
                position: relative;
                &:after{
                    content:"";
                    position: absolute;
                    top:50%;
                    right: -15px;
                    width:1px;
                    height:80%;
                    background: #DDDDDD;
                    transform: translate(-50%,-50%);
                }
            }
            .select{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            .ant-picker{
                border-radius: 16px;
            }
        }
    }
    .table-box{
        width: 100%;
        margin-top: 6px;
        height: calc(100% - 46px);
        display:flex;
        .ant-table-wrapper{
            width: 100%;
        }
    }
`
const AlarmHistoryTable = () => {

    const [selectData, setSelectData] = useState<string[]>([""]);

    useEffect(() => {
        const selectArr = [];
        for(let i =0 ; i< vabrationData.length; i++){
            selectArr.push(vabrationData[i].title)
        }
        setSelectData(selectArr);
    },[])

    return(
        <Card>
            <StyledAlarmHistoryTable>
            <div className="top-box">
                    <div className="title">진동감지 알람이력 조회</div>
                    <div className="filter-box">
                                <div className="select">
                                    <div className="label">기간</div>
                                    <RangePicker />
                                </div>
                                <div className="select">
                                    <div className="label">1차사업소</div>
                                    <SelectComp options={selectData} />
                                </div>
                                <div className="select">
                                    <div className="label">2차사업소</div>
                                    <SelectComp options={selectData} />
                                </div>
                               
                                <Button label='조회' size='small' />
                    </div>
                </div>
                <div className="table-box">
                    <HistoryTable />
                </div>
            </StyledAlarmHistoryTable>
        </Card>
    )
}

export default AlarmHistoryTable;

export interface DataType {
    no: number;
    first: string;
    second: string;
    sensor: string;
    location: string;
    equip: string;
    equipName: string;
    time: string;
    count: number;
}

// 테이블 헤더
const columns: ColumnsType<DataType> = [
    {
      title: '순번',
      dataIndex: 'no',
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
      title: "알람 발생시간",
      dataIndex: 'time',
    },
    {
      title: '횟수(1일간)',
      dataIndex: 'count',
    }
  ];


const HistoryTable = () => {
    return(
        <Table columns={columns} dataSource={historyData} pagination={{pageSize:15, position: ["bottomCenter"]}} />
    )
}