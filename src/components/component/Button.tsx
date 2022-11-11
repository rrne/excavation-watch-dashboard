import styled from "@emotion/styled"

const StyledButton = styled.div<{size:string, color:string}>`
    padding: ${(props) => (props.size  === "medium" ? '6px 0px' :"8px 0px")};
    display:flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: ${(props) => (props.size  === "large" ? '16px' :"14px")};
    font-weight: ${(props) => (props.size  === "large" ? '500' :"400")};
    border-radius:8px;
    transition: 0.3s;
    cursor: pointer;
    min-width: ${(props) => (props.size  === "small" ? '50px' : props.size === "medium" ? "100px" : "130px")};
    background:${(props) => (props.color  === "default" ? '#385493' : props.color === "sub" ? "#5A76B6" : props.color === "point" ?"#5380E3": "#DC5656")};
    border: 1px solid ${(props) => (props.color  === "default" ? '#5A76B6' : props.color === "sub" ? "#819BD6" : props.color === "point" ?"#A9BEED": "#FB9090")};
    &:hover{
        opacity: 0.9;
        box-shadow: 0 0 4px rgba(0,0,0,0.15);
    }
    &:active{
        transform: translate(1px,1px);
    }
`

interface ButtonProps {
   label: string;
   size?: 'small' | 'medium' | 'large';
   color?: 'default'| 'sub' | 'point' | 'red';
}

export const Button = ({label, size="large", color="default"}:ButtonProps) => {
    return(
        <StyledButton size={size} color={color} >
           {label}
        </StyledButton>
    )
}