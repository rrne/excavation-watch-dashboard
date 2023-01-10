import styled from "@emotion/styled"
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import Link from 'next/link'
import Image from "next/image";

const StyledTopBar = styled.div`
  width:100%;
  height:80px;
  background: #0F2E5A;
  display: flex;
  .admin-box{
    width: 150px;
    display: flex;
    gap: 10px;
    align-items: center;
    color: white;
    img{
      width: 32px;
    }
    .user-box{
      display: flex;
      flex-direction: column;
      gap: 4px;
      .user{
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
`

const StyledTitleBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 20%;
  color: white;
  font-size:18px;
  font-weight: 600;
  padding: 0 30px;
  img{
    cursor: pointer;
    height:35%;
  }
  .title{
    cursor: pointer;
  }
`
const StyledMenuBox = styled.div`
  display: flex;
  align-items: center;
  width: calc(80% - 150px);
  justify-content: space-around;
`
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  opacity: ${({selected} : {selected:boolean}) => (selected ? "1" : "0.5")};
  &:hover{
    opacity: 0.8;
  }
  img{
    width: 36px;
  }
`
export const linked = [
  {
    title: "종합현황",
    img: "dashboard",
    link: "",
  },
  {
    title: "진동센서관리",
    img: "vibration",
    link: "vibration"
  },
  {
    title: "단말기관리",
    img: "vibration",
    link: "terminal"
  },
  {
    title: "사용자알람설정",
    img: "user-event",
    link: "user-event"
  },
  {
    title: "알람이력/통계",
    img: "stats",
    link: "stats"
  },
  {
    title: "게시판",
    img: "board",
    link: "board"
  },
  {
    title: "사용자관리",
    img: "admin",
    link: "admin"
  },
]

const TopBar = () => {

  const router = useRouter();

  const [select, setSelect] = useState("")

  useEffect(() => {
    handleSelectLink()
  },[router.pathname])

  const handleSelectLink = () => {
    const filteredLink = linked.filter(list => list.link ===  router.pathname.split("/")[1])[0].link;
    setSelect(filteredLink)
  }

  const handleMainlink = () => {
    router.push('/')
  }
  return (
    <StyledTopBar>
      <StyledTitleBox onClick={handleMainlink}>
        <img src={require('public/image/favicon.png')} alt="" />
        <div className="title">지중송전선로 굴착공사 감지시스템</div>
      </StyledTitleBox>
      <StyledMenuBox>
        {linked.map((list,i) => {
          return(
              <Link href={list.link === "" ? "/" : `/${list.link}`} key={i}>
                <StyledMenu selected={select === list.link}>
                    <Image src={`/image/menu/${list.img}.png`} width={40} height={40}/>
                    <div>{list.title}</div>
                </StyledMenu>
              </Link>
          )
        })}
      </StyledMenuBox>
      <div className="admin-box">
        <img src={require('public/image/icon/userIcon.png')} alt="" />
        <div className="user-box">
          <div className="user">홍길동</div>
          <div className="center">보안 안전팀</div>
        </div>
      </div>
    </StyledTopBar>
  )
}

export default TopBar;