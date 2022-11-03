import styled from "@emotion/styled"

const StyledInputBox = styled.div`
    display:flex;
    flex-direction: column;
    gap: 6px;
    width: 100%;
`

const StyledTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
`

const StyledInput = styled.input`
    font-weight: 500;
    padding: 14px 12px;
    background: white;
    border: 1px solid #DEDEDE;
    width: 100%;
    border-radius: 8px;
    outline: none;
    &:read-only{
        background: #EDF0F2;
    }
`

interface InputBoxProps {
   title: string
   value?: string
   readOnly?:boolean
}

export const InputBox = ({title,value, readOnly=false}:InputBoxProps) => {
    return(
        <StyledInputBox>
            <StyledTitle>{title}</StyledTitle>
            <StyledInput readOnly={readOnly}>{value}</StyledInput>
        </StyledInputBox>
    )
}