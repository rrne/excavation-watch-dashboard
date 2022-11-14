import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Checkbox, Table } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import UsereventCenter from '@src/data/UsereventCenter.json';
import { useEffect, useState } from 'react';
import { Button } from "../Button";


const StyledUserChoice = styled.div`
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
                flex-grow: 1;
                align-items: center;
                .td{
                    border-right: 1px solid #DEDEDE;
                    height: 100%;
                    border-bottom: 1px solid #DEDEDE;
                    display: flex;
                    align-items: center;
                    padding: 0 20px;
                    justify-content: center;
                    &.second{
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
            width: 20%;
        }
        .second{
            width: 80%;
        }
    }
    .button-box{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
`

const UserChoice = () => {

    
    const [checkTableData, setCheckTableData] = useState<CheckboxTable[]>()

    useEffect(() =>{
        setCheckTableData(UsereventCenter)
    },[])

    const onChange = (e: CheckboxChangeEvent) => {
        if(!checkTableData) return;
        const data = [...checkTableData];
        for(let i = 0; i < data.length; i++){
            data[i].second.map(list => e.target.checked ? list.checked = true : list.checked = false)
        }
        setCheckTableData(data)
    };

    return(
        <Card>
            <StyledUserChoice>
            <div className="title-box">
                    <div className="title">진동센서 알람 받을 사업소 선택</div>
                    <div className="all-check"><Checkbox onChange={onChange}>전체선택(해제)</Checkbox></div>
                </div>
                <CheckBoxTable data={checkTableData} />
                <div className="button-box">
                <Button label="저 장"/>
                </div>
            </StyledUserChoice>
        </Card>
    )
}

export default UserChoice;

type SecondKey = {
    title:string;
    checked:boolean
}

interface CheckboxTable {
    first:string;
    second:SecondKey[]
}

const CheckBoxTable = ({data}:{data:CheckboxTable[] | undefined}) => {

    const [checkData,setCheckData] = useState<CheckboxTable[]>();
    useEffect(() => {
        setCheckData(data)
    },[data])

    const columns = [{
        title:"1차사업소",
        key:"first"
    },
    {
        title:"2차사업소",
        key:"second"
    }];

    const clickTheCheck = ({i, k}:{i:number, k:number}) => {
        if(!checkData) return;
        let data = [...checkData];
        data[i].second[k].checked = !data[i].second[k].checked;
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
                            {list.second.map((check,k) => <Checkbox key={k} checked={check.checked} onChange={() => clickTheCheck({i, k})}>{check.title}</Checkbox>)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}