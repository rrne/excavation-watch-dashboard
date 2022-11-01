import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const TitleBox = styled.div`
    display:flex;
    gap:8px;
    align-items:center;
    height:40px;
    
    h3{
        font-weight: 700;
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
}

export const Title = ({title,date}:TitleProps) => {
    return(
        <TitleBox>
            <h3 className='title'>{title}</h3>
            {date ? <div className='date'>({date})</div> : ""}
            <MoreBtn>더보기<FontAwesomeIcon icon={faCaretRight}/></MoreBtn>
        </TitleBox>
    )
}