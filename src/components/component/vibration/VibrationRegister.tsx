import styled from "@emotion/styled";
import { Card } from "@src/components/component/Card";
import vabrationData from '@src/data/vabrationSensor.json';
import {useEffect, useState} from 'react';
import SelectComp from '@src/components/component/Select'
import { Button } from '@src/components/component/Button';
import { useRouter } from "next/router";
import { DataType } from "./VibrationTable";
import ModifyMap from "./ModifyMap";
import { InputBox } from "@src/components/component/InputBox";
import { Checkbox } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const StyledModifyInfo = styled.div`
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
        }
    }
    
        .modify-table{
            width: 100%;
            height: calc(100% - 46px);
            display: flex;
            flex-direction: column;
            gap: 16px;
            .table-box{
                margin-top: 12px;
                width: 100%;
                height: 80px;
                display: flex;
                flex-direction: column;
                border-top: 1px solid #DEDEDE;
                border-bottom: 1px solid #DEDEDE;
                .thead{
                    width: 100%;
                    background: #F1F1F1;
                    height: 50%;
                    border-bottom: 1px solid #DEDEDE;
                    display: flex;
                    .th{
                        width: calc(100% / 6);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-weight: 600;
                        font-size: 16px;
                        border-right: 1px solid #DEDEDE;
                        &:last-child{
                            border-right: none
                        }
                    }
                }
                .tbody{
                    display: flex;
                    width: 100%;
                    height: 50%;
                    .td{
                        width: calc(100% / 6);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border: none;
                        text-align: center;
                        border-right: 1px solid #DEDEDE;
                        gap: 10px;
                        outline: none;
                        &:last-child{
                            border-right: none
                        }
                    }

                }
            }
            .location-box{
                width: 100%;
                height: calc(100% - 90px);
                display: flex;
                gap: 16px;
                .map-box{
                    position: relative;
                    width: 70%;
                    border-radius: 12px;
                    overflow: hidden;
                    border: 1px solid #E4E5E7;
                    .button{
                        position: absolute;
                        bottom: 12px;
                        right: 12px;
                        z-index: 1;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 0 5px rgba(0,0,0,0.2);
                    }
                }
                .info-box{
                    width: 30%;
                    background: #F5F6F9;
                    border-radius: 12px;
                    border: 1px solid #E4E5E7;
                    padding: 20px 12px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .input-box{
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                        .ant-checkbox-wrapper{
                            color: #385493;
                            .checkLabel{
                                font-weight: 600;
                            }
                        }
                    }
                    .button-box{
                        display: flex;
                        gap: 10px;
                        justify-content: end;
                    }
                }
            }
        }
`

const VibrationRegister = () => {

    const router = useRouter()

    const [selectData, setSelectData] = useState<string[]>([""]);
    const [modifyData, setModifyData] = useState<DataType>()

    useEffect(() => {
        const selectArr = [];
        for(let i =0 ; i< vabrationData.length; i++){
            selectArr.push(vabrationData[i].title)
        }
        setSelectData(selectArr);
        if(router.query.data)  setModifyData(JSON.parse(router.query.data as string))

    },[])

    return(
        <Card>
            <StyledModifyInfo>
                <div className="top-box">
                    <div className="title">진동센서 조회</div>
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
                                <Button label='생성' size='small' />
                    </div>
                </div>
                <ModifyTable data={modifyData} />
            </StyledModifyInfo>
        </Card>
    )
}

export default VibrationRegister;

  const columns = ["1차사업소","2차사업소","센서번호","위치설명","설비명","구분"]

const ModifyTable = ({data}:{data : DataType | undefined}) => {
  
    const [check, setCheck] = useState<boolean>(true);


    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };

    return(
        <div className="modify-table">
            <div className="table-box">
                <div className="thead">
                    {columns.map((list,i) => {return(
                        <div className="th" key={i}>
                            {list}
                        </div>
                    )})}
                </div>
                <div className="tbody">
                    <input className="td">{data?.first}</input>
                    <input className="td">{data?.second}</input>
                    <input className="td">{data?.sensor}</input>
                    <input className="td">{data?.location}</input>
                    <input className="td">{data?.equipName}</input>
                    <div className="td">
                       <Button size="medium" label="신규등록" color="point"/>
                    </div>
                </div>
            </div>
            <div className="location-box">
                <div className="map-box">
                    <ModifyMap xy={data?.xy} />
                    <div className="button"><Button label="위치정보 적용" size="large" /></div>
                </div>
                <div className="info-box">
                    <div className="input-box">
                        <InputBox title="1.위치설명" value={data?.location}/>
                        <InputBox title="2.토목설비" value={data?.equip}/>
                        <InputBox title="3.설비명" value={data?.equipName}/>
                        <InputBox title="4.위치정보(X/Y좌표)" value={data?.xy} readOnly={true}/>
                        <InputBox title="5.설치일" value={data?.time}/>
                        <InputBox title="6.진동감지" value={data?.sensor} readOnly={true}/>
                        <Checkbox onChange={onChange} defaultChecked={check}><span className="checkLabel">알림활성화</span> (체크해제 시 알람 제외)</Checkbox>
                    </div>
                    <div className="button-box">
                    <Button label="센서상태 초기화" size="large" color="sub"/>
                    <Button label="저장" size="large"/>
                    </div>
                </div>
            </div>
        </div>
    )
}