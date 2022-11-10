import styled from "@emotion/styled";

const StyledTableComp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .thead{
        width: 100%;
        height: 40px;
        display: flex;
        background: #ecedf0;
        .th{
            padding: 16px;
            flex-grow: 1;
            flex-basis: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            position:relative;

            &::after{
                content:"";
                width: 1px;
                height: 1.5em;
                background: rgba(0,0,0,0.08);
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
            }
        }
    }
`
interface TableProps {
    thead: TheadType[]
    tbody: any[]
} 

type TheadType = {
    key:string;
    title:string
}

const TableComp = ({thead, tbody}:TableProps) => {
    return(
        <StyledTableComp>
            <div className="thead">
                {thead.map((list,i) => {
                    return(
                            <div className="th" key={i}>
                                {list.title}
                            </div>
                    )
                } )}
            </div>
            <div className="tbody">
                {tbody.map((list,i) => <div className="tr" key={i}>
                    {thead.map((head,j) => <div className="td" key={j}>
                        {list[head.key]}
                    </div> )}
                </div> )}
            </div>
        </StyledTableComp>
    )
}

export default TableComp;