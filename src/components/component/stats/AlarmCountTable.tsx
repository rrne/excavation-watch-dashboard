import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Button } from '@src/components/component/Button';
import SelectComp from '@src/components/component/Select'
import {useEffect, useState} from 'react';
import vabrationData from '@src/data/vabrationSensor.json';
import { Table, DatePicker } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import statsAlarmData from '@src/data/statsAlarmData.json'

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
        height: calc(100% - 46px);
        margin-top: 6px;
        display:flex;
        .ant-table-wrapper{
            width: 100%;
                .ant-table-cell{
                    text-align: center;
                    border-bottom: 1px solid #DEDEDE;
                    border-right: 1px solid #DEDEDE;
                }
                .ant-table-cell::before{
                    width: 0 !important;
                }

                .totalRow{
                    .total{
                        background: #385493;
                        color: white;
                    }
                    .sub{
                        background: #D7DDE9;
                        border-right:1px solid white
                    }
                }
        }
    }
`
const AlarmCountTable = () => {
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
                    <div className="title">통계 (진동감지 알람 횟수)</div>
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
                        
                        <Button label='검색' size='small' />
                    </div>
                </div>
                <div className="table-box">
                     <StatsTable />
                </div>
            </StyledAlarmHistoryTable>
        </Card>
    )
}

export default AlarmCountTable;


export interface DataType {
    first: string;
    pipeline: number;
    elecline: number;
    total: number;
    ect: string;
}

const columns: ColumnsType<DataType> = [
    {
      title: '1차사업소',
      dataIndex: 'first',
      width: 300,
    },
    {
      title: '알람횟수',
     children:[
        {
            title:"관로",
            dataIndex: 'pipeline',
            width: 150
        },
        {
            title:"전력구",
            dataIndex: 'elecline',
            width: 150
        },
        {
            title:"합계",
            dataIndex: 'total',
            width: 150
        }
     ]
    },
    {
      title: '비고',
      dataIndex: 'ect',
      width: 450,
    }
  ];


const StatsTable = () => {
    return(
        <Table columns={columns} dataSource={statsAlarmData} pagination={false} size="small"
        summary={
            pageData => {
                let totalData = {
                    pipeline:0,
                    elecline:0,
                    total:0,
                    ect: "",
                }

                pageData.forEach(({ pipeline, elecline,
                    total }) => {
                        totalData.pipeline += pipeline;
                        totalData.elecline += elecline;
                        totalData.total += total;
                  });
                return(
                    <Table.Summary.Row className="totalRow">
                        <Table.Summary.Cell align="center" className="total" index={0}>합계</Table.Summary.Cell>
                        {Object.entries(totalData).map(([key, value],i) => <Table.Summary.Cell align="center" className="sub" key={i} index={i + 1}>
                            <div>{value}</div>
                        </Table.Summary.Cell> )}
                    </Table.Summary.Row>
                )
            }
        } />
    )
}