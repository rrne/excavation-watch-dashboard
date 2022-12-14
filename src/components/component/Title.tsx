import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styled from "@emotion/styled";
import { useRouter } from 'next/router';

const TitleBox = styled.div`
    display:flex;
    gap:8px;
    align-items:center;
    height:34px;
    
    h3{
        font-weight: 800;
        font-size: 16px;
        margin :0
    }
    .date{
        letter-spacing: -1px;
    }
`

const MoreBtn = styled.div`
        color:#385493;
        margin-left:4px;
        display:flex;
        gap:4px;
        font-size: 12px;
        cursor:pointer;
        align-items:center;
        cursor: pointer;
        transition: 0.3s;
        font-weight:600;
        transform: translateY(2px);
        &:hover{
            opacity: 0.8;
        }
`

interface TitleProps {
   title: string
   date?: string
   link?: string
}

export const Title = ({title,date, link}:TitleProps) => {
    const router = useRouter()
    const handleMoreLinkPage =() => {
        if(!link) return;
        router.push(link)
    }
    return(
        <TitleBox>
            <h3 className='title'>{title}</h3>
            {date ? <div className='date'>({date})</div> : ""}
            <MoreBtn onClick={handleMoreLinkPage}>더보기<FontAwesomeIcon icon={faCaretRight}/></MoreBtn>
        </TitleBox>
    )
}