import { Title } from '@src/components/component/Title';
import styled from "@emotion/styled"
// import UnstyledSelectIntroduction from '@src/components/component/Select'
import SelectComp from '@src/components/component/Select'
import {useEffect, useState} from 'react';
import vabrationData from '@src/data/vabrationSensor.json';
import { Button } from '../Button';

// 스타일✨
const StyledVibrationSensorTable = styled.div`
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

        .filter-box{
            display: flex;
            gap: 30px;
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
            .select-box{
                display: flex;
                gap: 10px;
                align-items: center;
                .select{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
            }
        }
    }
    .table-box{
        width: 100%;
        height: calc(100% - 46px);
        display:flex;
    }
`

// 타입선언🚀
type dataType = 
    {
        title: string | null;
        pipe: number | null;
        elec: number | null;
        event: {
            communication: number | null;
            battery: number | null;
            vibration: number | null;
        };
    }
    

const VibrationSensorTable = () => {

    const [selectData, setSelectData] = useState<string[]>([""]);
    const [tableData, setTabletData] = useState<dataType[][]>();

    //리팩토링 필요함💩
    useEffect(() => {
        const data = [...vabrationData]

        const selectArr = [];
        for(let i =0 ; i< vabrationData.length; i++){
            selectArr.push(vabrationData[i].title)
        }
        setSelectData(selectArr)

        const dataArr: dataType[][] = [];
        for(let i = 0; i < data.length; i){
            if(data.length === 6){
                dataArr.push(data.splice(i, i+5));
            }else{
                dataArr.push(data.splice(i, i+6));
            }
        }

        let last = dataArr[dataArr.length - 1];
        for(let i = last.length; i < 6; i++){
            if(i === 5){
                dataArr[dataArr.length - 1][i] =  {
                    title: "합계",
                    pipe: 0,
                    elec: 0,
                    event: {
                        communication: 0,
                        battery: 0,
                        vibration: 0,
                    }
                };
            }else{
                dataArr[dataArr.length - 1][i] =  {
                    title: "",
                    pipe: null,
                    elec: null,
                    event: {
                        communication: null,
                        battery: null,
                        vibration: null,
                    }
                };
            }
        }
        setTabletData(dataArr);
    },[])

    return (
        <StyledVibrationSensorTable>
            <div className="top-box">
                <div className="title-box">
                    <Title title='진동센서 설치수량' date='2021-12-31 14:15' />
                </div>
                <div className="filter-box">
                    <div className="title">사업소 조회</div>
                    <div className="select-box">
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
            </div>
            <div className="table-box">
                    {tableData?.map((list, i) => <TableComp key={i} sixList={list} />)}
            </div>
        </StyledVibrationSensorTable>
    )
}

export default VibrationSensorTable;

// 스타일✨
const StyledTableComp = styled.div`
    width: calc(100% / 3);
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1px solid #DDDDDD;
    border-top: 1px solid #DEDEDE;
    .thead{
        width:100%;
        background: #F1F1F1;
        height: 25%;
        display: flex;
        border-bottom: 1px solid #DEDEDE;
        .center{
            width:30%;
            display:flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid #DEDEDE;
        }
        .data{
            width:70%;
            height: 100%;
            display: flex;
            .th-inner{
                width: 50%;
                display: flex;
                flex-direction: column;
                height: 100%;
                .inner-top{
                    width: 100%;
                    height: 40%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px solid #DEDEDE;
                    border-bottom: 1px solid #DEDEDE;
                }
                .inner-bottom{
                    display: flex;
                    height: 60%;
                    .th{
                        width: calc(100% / 3);
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                        border-right: 1px solid #DEDEDE;
                    }
                }
            }
        }
    }
    .tbody{
        width:100%;
        height:75%;
        display: flex;
        flex-direction: column;
        .tr{
            width: 100%;
            height: calc(100% / 6);
            display: flex;
            border-bottom: 1px solid #DEDEDE;
            &.total{
                    .center{
                        background: #385493;
                        color: white;
                    }
                    .td{
                        background: #F5F6F9;
                    }
                }

            .center{
                width: 30%;
                background: #F5F6F9;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid #DEDEDE;
               
            }
            .td{
                width: calc(70% / 6);
                display: flex;
                align-items: center;
                justify-content: center;
                border-right: 1px solid #DEDEDE;
            }
        }
    }
`

// 자식 테이블 컴포넌트
const TableComp = ({sixList}:{sixList:dataType[]}) => {
    return(
        <StyledTableComp>
            <div className="thead">
                <div className="center">1차사업소</div>
                <div className="data">
                    <div className="th-inner">
                        <div className="inner-top">설치수량</div>
                        <div className="inner-bottom">
                            <div className="th">관로</div>
                            <div className="th">전력구</div>
                            <div className="th">합계</div>
                        </div>
                    </div>
                    <div className="th-inner">
                    <div className="inner-top">특이사항</div>
                        <div className="inner-bottom">
                            <div className="th">통신<br/>불량</div>
                            <div className="th">배터리<br/>부족</div>
                            <div className="th">진동<br/>감지</div>
                        </div></div>
                </div>
            </div>
            <div className="tbody">
                {sixList.map((list,i) => {
                    return(
                        <div className={list.title === "합계" ? "total tr" : "tr"} key={i}>
                            <div className="center">{list.title}</div>
                            <div className="td">{list.pipe}</div>
                            <div className="td">{list.elec}</div>
                            <div className="td">{list.pipe && list.elec &&list.pipe + list.elec}</div>
                            <div className="td">{list.event.communication}</div>
                            <div className="td">{list.event.battery}</div>
                            <div className="td">{list.event.vibration}</div>
                        </div>
                    )
                })}
            </div>
        </StyledTableComp>
    )
}