import styled from "@emotion/styled";

type TheadType = {
    title:string;
    key:string;
}

interface TableProps {
    thead: TheadType[]
}

const StyledTable = styled.div`
    width:100%;
    height:100%;
`

export const Table = ({}:TableProps) => {
    return(
        <StyledTable>
        </StyledTable>
    )
}