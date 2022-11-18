import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import { DataType } from "./NoticeTable";
import { Button } from "../Button";

const StyledNoticeInfoComp = styled.div`
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

const NoticeInfoComp = () => {
    const router = useRouter();
    const [paramData, setParamData] = useState<DataType>();

    useEffect(() => {
        if(router.query.data) setParamData(JSON.parse(router.query.data as string))
    },[])

    const goBackToTable = () => {
        router.push('/board')
    }
    return(
        <Card>
            <StyledNoticeInfoComp>
                <div className="top-box">
                    <div className="title">공지사항</div>
                    <div className="header-box">
                            <div className="title">제목: {paramData?.title}</div>
                            <div className="date header">작성일: {paramData?.date}</div>
                            <div className="writer header">작성자: {paramData?.writer}</div>
                            <div className="count header">조회수: {paramData?.count}</div>
                    </div>
                </div>
                <div className="main-box">
                    <div className="text-box">
                        임시글입니다
                    </div>
                    <div className="button-box">
                        <Button label="목록" color="sub" onClick={goBackToTable} />
                    </div>
                </div>
            </StyledNoticeInfoComp>
        </Card>
    )
}

export default NoticeInfoComp;