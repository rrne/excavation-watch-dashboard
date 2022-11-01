import styled from 'styled-components'
import { useRouter } from 'next/router';
import {useState, useEffect} from 'react';
import Link from 'next/link'

const StyledTopBar = styled.div`
  width:100%;
  height:80px;
  background: #0F2E5A;
  display: flex;
`

const StyledTitleBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  width: 25%;
  color: white;
  font-size:18px;
  font-weight: 600;
  padding: 0 30px;
  img{
    height:35%;
  }
`
const StyledMenuBox = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
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
const linked = [
  {
    title: "종합현황",
    img:"dashboard",
    link:"/",
  },
  {
    title: "진동센서관리",
    img:"vibration",
    link:"/vibration"
  },
  {
    title: "사용자알람설정",
    img:"user-event",
    link:"/user-event"
  },
  {
    title: "알람이력/통계",
    img:"stats",
    link:"/stats"
  },
  {
    title: "게시판",
    img:"board",
    link:"/board"
  },
]

const TopBar = () => {

  const router = useRouter();

  const [select, setSelect] = useState({
    title: "종합현황",
    img:"dashboard",
    link:""
  })

  useEffect(() => {
    handleSelectLink()
  },[router.pathname])

  const handleSelectLink = () => {
    const filteredLink = linked.filter(list => list.link ===  router.pathname)[0]
    setSelect(filteredLink)
  }

  return (
    <StyledTopBar>
      <StyledTitleBox>
        <img src="/image/favicon.png" alt="" />
        <div>지중송전선로 굴착공사 감지시스템</div>
      </StyledTitleBox>
      <StyledMenuBox>
        {linked.map((list,i) => {
          return(
              <Link href={list.link} key={i}>
                <StyledMenu selected={select.link === list.link}>
                      <img src={`/image/menu/${list.img}.png`} alt="" />
                      <div>{list.title}</div>
                </StyledMenu>
              </Link>
          )
        })}
      </StyledMenuBox>
    </StyledTopBar>
  )
}

export default TopBar;