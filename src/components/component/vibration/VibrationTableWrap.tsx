import { Card } from "@src/components/component/Card";
import { Title } from '@src/components/component/Title';
import SelectComp from '@src/components/component/Select'
import { Button } from '@src/components/component/Button';
import vabrationData from '@src/data/vabrationSensor.json';
import {useEffect, useState} from 'react';
import styled from "@emotion/styled";
import VibrationTable from './VibrationTable'

const VibrationTableWrap = () => {
    return(
            <Card>
                <TableComp />
            </Card>
    )
}

const StyledVibrationTableWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;

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
        }
    }
    .table-box{
        width: 100%;
        height: calc(100% - 46px);
        display:flex;
    }
`

export default VibrationTableWrap;

const TableComp = () => {
    const [selectData, setSelectData] = useState<string[]>([""]);

    useEffect(() => {
        const selectArr = [];
        for(let i =0 ; i< vabrationData.length; i++){
            selectArr.push(vabrationData[i].title)
        }
        setSelectData(selectArr)
    },[])

    return(
        <StyledVibrationTableWrap>
            <div className="top-box">
                   <div className="title">등록현황 조회</div>
                <div className="filter-box">
                            <div className="select">
                                <div className="label">1차사업소</div>
                                <SelectComp options={selectData} />
                            </div>
                            <div className="select">
                                <div className="label">2차사업소</div>
                                <SelectComp options={selectData} />
                            </div>
                            <div className="select">
                                <div className="label">센서No.</div>
                                <SelectComp options={selectData} />
                            </div>
                            <Button label='검색' size='small' />
                </div>
            </div>
            <div className="table-box">
                <VibrationTable />
            </div>
        </StyledVibrationTableWrap>
    )
}