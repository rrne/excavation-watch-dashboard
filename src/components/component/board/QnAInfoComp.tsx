import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import { DataType } from "./QnATable";
import { Button } from "../Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

const StyledQnAInfoComp = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .top-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        .title {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                font-size: 16px;
                font-weight: 800;
                position: relative;
            }
            .header-box{
                height: 40px;
                width: 100%;
                display: flex;
                height: 40px;
                align-items: center;
                border-top:1px solid #DEDEDE;
                border-bottom:1px solid #DEDEDE;
                background: #F1F1F1;
                .header{
                    padding: 0 20px;
                    border-left: 1px solid #DEDEDE;
                    display: flex;
                    justify-content: center;
                   
                }
                .title{
                    width:71%;
                    font-weight: 600;
                    padding-left:20px;
                    .reply{
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        margin-left: 6px;
                        .replyIcon{
                            transform: rotate(90deg);
                        }
                    }
                }
                .date{
                    width:14%;
                    justify-content: flex-start;
                }
                .writer{
                    width: 8%;
                }
                .count{
                    width: 7%;
                }
            }
    }
    .main-box{
        width: 100%;
        height: calc(100% - 100px);
        display: flex;
        flex-direction: column;
        gap: 10px;
        .text-box{
            width: 100%;
            border: 1px solid #e6e7e9;
            background: #fcfbfb;
            height: calc(100% - 50px);
            border-radius: 12px;
            padding: 20px;
        }
        .button-box{
            display: flex;
            align-items: center;
            justify-content: end;
        }
    }
`

const QnAInfoComp = () => { 
    const router = useRouter();
    const [paramData, setParamData] = useState<DataType>();

    useEffect(() => {
        if(router.query.data) setParamData(JSON.parse(router.query.data as string))
    },[])

    const goBackToTable = () => {
        router.push('/board/qna')
    }
    return(
        <Card>
        <StyledQnAInfoComp>
            <div className="top-box">
                <div className="title">Q&A</div>
                <div className="header-box">
                        <div className="title">??????: {paramData?.reply ? <div className="reply">
                <FontAwesomeIcon icon={faArrowTurnUp} className="replyIcon" />RE: </div> : ""} {paramData?.title}</div>
                        <div className="date header">?????????: {paramData?.date}</div>
                        <div className="writer header">?????????: {paramData?.writer}</div>
                        <div className="count header">?????????: {paramData?.count}</div>
                </div>
            </div>
            <div className="main-box">
                <div className="text-box">
                    ??????????????????
                </div>
                <div className="button-box">
                    <Button label="??????" color="sub" onClick={goBackToTable} />
                </div>
            </div>
        </StyledQnAInfoComp>
    </Card>
    )
}

export default QnAInfoComp;