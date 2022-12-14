import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@src/components/component/Title';
import { Card } from '@src/components/component/Card';
import styled from "@emotion/styled";
import {StyledInstallStatus, StyledNoticeBox, StyledQandABox} from './bottomCompStyled';
import Image from "next/image";


// π₯ μ’ν©νν© νμ΄μ§ > νλ¨ν¨λ > μ€μΉνν©
const status = [
    {
        title: "μ μ",
        image: "status-normal",
        count: 334
    },
    {
        title: "λ°°ν°λ¦¬λΆμ‘±",
        image: "status-battery",
        count: 20
    },
    {
        title: "μ§λκ°μ§",
        image: "status-vibration",
        count: 14
    },
]

export const InstallStatus = () => {
    return(
        <Card>
        <>
        <Title title='μ€μΉνν©' date='2021-12-31 14:15' link='/stats/count/'/>
        <StyledInstallStatus>
            <div className="title-box">
                <div className="title">μ§λμΌμ</div>
                <div className="count">
                    <div className="label">μ μ²΄μλ</div>
                    <div className="number">378κ°</div>
                </div>
            </div>
            <div className="install-status-box">
                <div className="label-data-box">
                <div className="label-box">
                    <div className="label">ν΅μ μνΈ</div>
                    <div className="count">368κ°</div>
                </div>
                <div className="label-box">
                    <div className="label">ν΅μ λΆλ</div>
                    <div className="count">10κ°</div>
                </div>
                </div>
                <div className="status-box">
                    {status.map((list,i) => {
                        return(
                            <div className="status" key={i}>
                                <Image src={`/image/icon/${list.image}.png`} width={36} height={36}/>
                                <div className="data-box">
                                    <div className="label">{list.title}</div>
                                    <div className="data">
                                        {list.count} κ°
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="title-box">
                <div className="title">λ¨λ§κΈ°</div>
                <div className="count">
                    <div className="label">μ μ²΄μλ</div>
                    <div className="number">120κ°</div>
                </div>
            </div>
        </StyledInstallStatus>
        </>
        </Card>
    )
}


// π₯ μ’ν©νν© νμ΄μ§ > νλ¨ν¨λ > κ³΅μ§μ¬ν­
const notice = [
    {
        title:"[μλ‘μ΄ κΈ°λ₯] μμ€ν κ°μ μ¬ν­ μλ΄('22.10.18.)",
        date:"2022-10-18 17:51"
    },
    {
        title:"μ κΈ°μ κ²μ λ°λ₯Έ μ°κ³μλΉμ€ μΌμ μ€λ¨ μλ΄",
        date:"2022-10-17 20:34"
    },
    {
        title:"μ€μΉμ λ°λ₯Έ λ€νΈμν¬ μΌμ μ€λ¨ μλ΄",
        date:"2022-10-17 14:15"
    },
    {
        title:"μ°½ λ°λ³΅λλ κ²½μ° μ‘°μΉ λ°©λ²",
        date:"2022-10-16 08:21"
    },
    {
        title:"	[κ³΅μ§μ¬ν­] μ μ¬μ¬μ΄νΈ μ£Όμ μλ΄",
        date:"2022-10-15 12:42"
    },
]

export const NoticeComp = () => {
    return(
        <Card>
        <>
        <Title title='κ³΅μ§μ¬ν­' link='/board' />
        <StyledNoticeBox>
            {notice.map((list, i) => {
                return(
                    <div className="list" key={i}>
                        <div className="title">{list.title}</div>
                        <div className="date">{list.date}</div>
                    </div>
                )
            })}
        </StyledNoticeBox>
        </>
        </Card>
    )
}


// π₯ μ’ν©νν© νμ΄μ§ > νλ¨ν¨λ > Q&A
const QnA = [
    {
        q:"λ€νΈμν¬κ° μμλ μ΄λ»κ² ν΄μΌ νλμ?",
        date:"2022-10-17 09:42",
    },
    {a:"λ€νΈμν¬κ° μμλ μ΄λ»κ² ν΄μΌ νλμ?",
    aDate:"2022-10-17 13:56"},
    {
        q:"μλΉμ€ μ΄μ©λ°©λ²μ΄ κΆκΈν©λλ€.",
        date:"2022-10-15 22:38",
    },
    {a:"μλΉμ€ μ΄μ©λ°©λ²μ΄ κΆκΈν©λλ€.",
    aDate:"2022-10-16 10:17"},
    {
        q:"μλ΄ κ²°κ³Όλ μ΄λ»κ² λμ€λ κ±΄κ°μ?",
        date:"2022-10-15 11:25"
    },
]


export const QandAComp = () => {
    return(
        <Card>
            <>
            <Title title='Q&A' link='/board/qna'/>
                <StyledQandABox>
                    {QnA.map((list,i) => {
                        return(
                            <div className={list.q ? "list" : "list reply"} key={i}>
                            {list.q ? 
                               <>
                                <div className="title">{list.q}</div>
                                <div className="date">{list.date}</div>
                                </>
                             : <>
                                <div className="title"><FontAwesomeIcon icon={faArrowTurnUp} className="icon"/> RE: {list.a}</div>
                                <div className="date">{list.aDate}</div>
                                </>}
                            </div>
                        )
                    })}
                </StyledQandABox>
            </>
        </Card>
    )
}


// π₯ μ’ν©νν© νμ΄μ§ > νλ¨ν¨λ > Information
const info = [
    {
        title:"TOMS",
        img:"toms"
    },
    {
        title:"STOM",
        img:"stom"
    },
    {
        title:"μ§λκ²μ",
        img:"map"
    },
]

const StyledInformationBox = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
   .info-box{
        width: calc((100% - 20px) / 3);
        height: calc(50% - 5px);
        transition: 0.3s;
        cursor: pointer;
    .info{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 700;
        flex-direction: column;
        width: 100%;
        height: 100%;
        gap: 6px;
        img{
            width: 40%;
        }
    }
    &:hover{
        transform: translate(-1px, -1px);
    }
   }
   .call-box{
    width: 100%;
    height: calc(50% - 5px);
    position: relative;
    transition: 0.25s;
    cursor: pointer;
    img{
        position: absolute;
        height: 70%;
        top: 50%;
        left: 12%;
        transform: translate(-50%,-50%);
    }
    .call-info{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 600;
        gap: 8px;
       
        .label{
            transform: translateY(5px);
        }
        .number{
            font-size: 36px;
            color: #385493;
            font-weight: 800;
            letter-spacing: -1px;
        }
    }
    &:hover{
        transform: translate(-1px,-1px);
    }
   }
`
export const InfoComp = () => {
    return(
         <StyledInformationBox>
            {info.map((list,i) => {
                return (
                    <div className="info-box" key={i}>
                        <Card>
                        <div className='info'>
                        <Image src={`/image/icon/${list.img}.png`} width={40} height={40}/>
                        <span className="title">{list.title}</span>
                        </div>
                        </Card>
                    </div>
                )
            })}
           <div className="call-box">
            <Card>
                    <>
                    <img src={require('public/image/icon/call.png')} alt="" />
                    <div className='call-info'>
                        <div className="label">μμ€νλ¬Έμ</div>
                        <div className="number">042-865-5219</div>
                    </div>
                    </>
                </Card>
           </div>
         </StyledInformationBox>
    )
}