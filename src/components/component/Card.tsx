import styled from 'styled-components'

interface CardProps {
    children?: JSX.Element
}

const StyledCard = styled.div`
    width:100%;
    height:100%;
    background: #FFFFFF;
    border: 1px solid #E4E5E7;
    border-radius: 12px;
    padding:12px;
`

export const Card = ({children}:CardProps) => {
    return(
        <StyledCard>
            {children}
        </StyledCard>
    )
}