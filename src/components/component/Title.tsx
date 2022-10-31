import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'

const TitleBox = styled.div`
    display:flex;
    gap:8px;
    align-items:baseline;
    font-weight: 500;
    font-size: 16px;
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
            {date ? <div>(date)</div> : ""}
            <MoreBtn>더보기<FontAwesomeIcon icon={faCaretRight}/></MoreBtn>
        </TitleBox>
    )
}