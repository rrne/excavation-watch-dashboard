import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@src/components/component/Title';
import { Card } from '@src/components/component/Card';
import styled from 'styled-components';


// 🔥 종합현황 페이지 > 하단패널 > 설치현황

const status = [
    {
        title: "정상",
        image: "status-normal",
        count: 334
    },
    {
        title: "배터리부족",
        image: "status-battery",
        count: 20
    },
    {
        title: "진동감지",
        image: "status-vibration",
        count: 14
    },
]

const StyledInstallStatus = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    overflow: hidden;
    .title-box{
        width: 100%;
        height:17%;
        display: flex;
        justify-content: space-between;
        background: #F1F1F1;
        align-items: center;
        padding: 0 12px;
        font-weight: 600;
        .title{
            font-size: 16px;
        }
        .count{
            display: flex;
            gap: 10px;
            align-items: center;
            font-weight: 400;
            .number {
                font-size: 16px;
                font-weight: 600;
            }
        }
    }

    .install-status-box{
        width: 100%;
        height: 66%;
        display: flex;
        .label-data-box{
            width: 35%;
            display: flex;
            flex-direction: column;
            height: 100%;
            .label-box{
                width: 100%;
                height: 50%;
                display:flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .count{
                    font-size: 16px;
                    font-weight: 500;
                }
            
                &:nth-child(1){
                    background: #F5F6F9;
                }
                &:nth-child(2){
                    background: #FDF5F5;
                }
            }
        }
        .status-box{
            width:65%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .status{
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 6px;
                transition: 0.3s;
                img{
                    width: 80%;
                }
                .data-box{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    line-height: 18px;
                    .data{
                        font-size: 16px;
                        font-weight: 600;
                    }
                }
                &:hover {
                    opacity: 0.7;
                }
            }
        }
    }
`

export const InstallStatus = () => {
    return(
        <Card>
        <>
        <Title title='설치현황' date='2021-12-31 14:15'/>
        <StyledInstallStatus>
            <div className="title-box">
                <div className="title">진동센서</div>
                <div className="count">
                    <div className="label">전체수량</div>
                    <div className="number">378개</div>
                </div>
            </div>
            <div className="install-status-box">
                <div className="label-data-box">
                <div className="label-box">
                    <div className="label">통신양호</div>
                    <div className="count">368개</div>
                </div>
                <div className="label-box">
                    <div className="label">통신불량</div>
                    <div className="count">10개</div>
                </div>
                </div>
                <div className="status-box">
                    {status.map((list,i) => {
                        return(
                            <div className="status" key={i}>
                                <img src={`/image/icon/${list.image}.png`} alt="" />
                                <div className="data-box">
                                    <div className="label">{list.title}</div>
                                    <div className="data">
                                        {list.count} 개
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="title-box">
                <div className="title">단말기</div>
                <div className="count">
                    <div className="label">전체수량</div>
                    <div className="number">120개</div>
                </div>
            </div>
        </StyledInstallStatus>
        </>
        </Card>
    )
}


// 🔥 종합현황 페이지 > 하단패널 > 공지사항
const notice = [
    {
        title:"[새로운 기능] 시스템 개선사항 안내('22.10.18.)",
        date:"2022-10-18 17:51"
    },
    {
        title:"정기점검에 따른 연계서비스 일시 중단 안내",
        date:"2022-10-17 20:34"
    },
    {
        title:"설치에 따른 네트워크 일시 중단 안내",
        date:"2022-10-17 14:15"
    },
    {
        title:"창 반복되는 경우 조치 방법",
        date:"2022-10-16 08:21"
    },
    {
        title:"	[공지사항] 유사사이트 주의 안내",
        date:"2022-10-15 12:42"
    },
]

const StyledNoticeBox = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    overflow: hidden;
    .list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: calc(100% / 5);
        border-bottom: 1px solid #DEDEDE;
        transition: 0.25s;
        cursor: pointer;
        font-weight: 500;
        .date{
            letter-spacing: -1px;
            font-weight: 400;
        }
        &:last-child{
            border-bottom: none;
        }
        &:hover{
            transform: translateY(-1px);
            opacity: 0.8;
        }
    }
`

export const NoticeComp = () => {
    return(
        <Card>
        <>
        <Title title='공지사항' />
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


// 🔥 종합현황 페이지 > 하단패널 > Q&A

const QnA = [
    {
        q:"네트워크가 없을때 어떻게 해야 하나요?",
        date:"2022-10-17 09:42",
        a:"네트워크가 없을때 어떻게 해야 하나요?",
        aDate:"2022-10-17 13:56"
    },
    {
        q:"서비스 이용방법이 궁금합니다.",
        date:"2022-10-15 22:38",
        a:"서비스 이용방법이 궁금합니다.",
        aDate:"2022-10-16 10:17"
    },
    {
        q:"안내 결과는 어떻게 나오는 건가요?",
        date:"2022-10-15 11:25"
    },
]

const StyledQandABox= styled.div`
    width: 100%;
    height: calc(100% - 40px);
    overflow: hidden;
    .list{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: calc(100% / 5);
        border-bottom: 1px solid #DEDEDE;
        transition: 0.25s;
        cursor: pointer;
        font-weight: 500;
        &.reply{
            padding-left: 6px;
            .title{
                color: #385493;
            }
        }
        .icon{
            transform: rotate(90deg);
            font-size: 12px;
        }
        .date{
            letter-spacing: -1px;
            font-weight: 400;
        }
        &:last-child{
            border-bottom: none;
        }
        &:hover{
            transform: translateY(-1px);
            opacity: 0.8;
        }
    }
   
`
export const QandAComp = () => {
    return(
        <Card>
            <>
            <Title title='Q&A' />
                <StyledQandABox>
                    {QnA.map((list,i) => {
                        return(
                            <>
                            <div className="list" key={i}>
                                <div className="title">{list.q}</div>
                                <div className="date">{list.date}</div>
                            </div>
                            {list.a ? <div className="list reply" key={"j"+i}>
                                <div className="title"><FontAwesomeIcon icon={faArrowTurnUp} className="icon"/> RE: {list.a}</div>
                                <div className="date">{list.aDate}</div>
                            </div> : ""}
                            </>
                        )
                    })}
                </StyledQandABox>
            </>
        </Card>
    )
}


// 🔥 종합현황 페이지 > 하단패널 > Information
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
        title:"지도검색",
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
                        <img src={`/image/icon/${list.img}.png`} alt="" />
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
                        <div className="label">시스템문의</div>
                        <div className="number">042-865-5219</div>
                    </div>
                    </>
                </Card>
           </div>
         </StyledInformationBox>
    )
}