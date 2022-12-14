import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Checkbox, Table } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import UsereventUser from '@src/data/UsereventUser.json';
import { useEffect, useState } from 'react';
import { Button } from "../Button";

// 스타일✨
const StyledCenterChoice = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .title-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 30px;
        align-items: center;
        .ant-checkbox-wrapper {
            color: #385493;
        }
        .title {
            font-size: 16px;
            font-weight: 800;
            position: relative;
        }
    }
    .checkbox-table{
        width: 100%;
        height: calc(100% - 80px);
        display: flex;
        flex-direction: column;
        .thead{
            width: 100%;
            height: 40px;
            background: #F1F1F1;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #DEDEDE;
            border-top: 1px solid #DEDEDE;
            .th{
                display: flex;
                justify-content: center;
                border-right: 1px solid #DEDEDE;
                align-items: center;
                height: 100%;
                font-weight: 600;
                &:last-child{
                    border-right: none;
                }
            }
        }

        .tbody{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: calc(100% - 40px);
            .tr{
                width: 100%;
                display: flex;
                height: calc(100% / 15);
                align-items: center;
                .td{
                    border-right: 1px solid #DEDEDE;
                    height: 100%;
                    border-bottom: 1px solid #DEDEDE;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                    justify-content: center;
                    &.partUser{
                        justify-content: flex-start;
                        gap: 30px;
                    }
                    &:last-child{
                    border-right: none;
                }
                }
                &:nth-child(2n){
                    background: #F5F6F9;
                }
            }
        }
        .first{
            width: 12%;
        }
        .second{
            width: 12%;
        }
        .part{
            width: 12%;
        }
        .partUser{
            width: 66%;
        }
    }
    .button-box{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
`
// 타입선언🚀
type PartUser = {
    name:string;
    check:boolean
}
interface CheckboxTable {
    first:string;
    second:string;
    part:string;
    partUser:PartUser[]
}

const CenterChoice = () => {

    const [checkTableData, setCheckTableData] = useState<CheckboxTable[]>()

    useEffect(() =>{
        setCheckTableData(UsereventUser)
    },[])

    const onChange = (e: CheckboxChangeEvent) => {
        if(!checkTableData) return;
        const data = [...checkTableData];
        for(let i = 0; i < data.length; i++){
            data[i].partUser.map(list => e.target.checked ? list.check = true : list.check = false)
        }
        setCheckTableData(data)
    };

    return(
        <Card>
            <StyledCenterChoice>
                <div className="title-box">
                    <div className="title">진동센서 알람 받을 사용자 선택</div>
                    <div className="all-check"><Checkbox onChange={onChange}>전체선택(해제)</Checkbox></div>
                </div>
                <CheckBoxTable data={checkTableData} />
            <div className="button-box">
            <Button label="저 장"/>
            </div>
            </StyledCenterChoice>
        </Card>
    )
}

export default CenterChoice;

// 자식 테이블 컴포넌트 
const CheckBoxTable = ({data}:{data:CheckboxTable[] | undefined}) => {

    const [checkData,setCheckData] = useState<CheckboxTable[]>();
    useEffect(() => {
        if(!data) return;
        let dataArr = [...data];
        for(let i = dataArr.length; i < 15; i++){
                dataArr[i] = {
                    "first":"",
                    "second": "",
                    "part":"",
                    "partUser":[]
                }
        }
        setCheckData(dataArr);
        console.log();
        
    },[data])

    const columns = [{
        title:"1차사업소",
        key:"first"
    },
    {
        title:"2차사업소",
        key:"second"
    },
    {
        title:"부서명",
        key:"part"
    },
    {
        title:"부서원",
        key:"partUser"
    }
];
const clickTheCheck = ({i, k}:{i:number, k:number}) => {
    if(!checkData) return;
    let data = [...checkData];
    data[i].partUser[k].check = !data[i].partUser[k].check;
    setCheckData(data)
}
   
    return(
        <div className="checkbox-table">
            <div className="thead">
                {columns.map((list,i) => <div className={"th " + list.key} key={i}>{list.title}</div> )}
            </div>
            <div className="tbody">
                { checkData?.map((list,i) => {
                    return(
                        <div className="tr" key={i}>
                            <div className="td first">{list.first}</div>
                            <div className="td second">
                                {list.second}
                            </div>
                            <div className="td part">
                                {list.part}
                            </div>
                            <div className="td partUser">
                                {list.partUser.map((check,k) => <Checkbox key={k} checked={check.check} onChange={() => clickTheCheck({i, k})}>{check.name}</Checkbox>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}