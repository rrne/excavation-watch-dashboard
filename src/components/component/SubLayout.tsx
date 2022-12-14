import styled from "@emotion/styled";
import SubMenu, {SubMenuProps} from "./SubMenu";

// 스타일✨
const StyledSubLayout = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    .sub-menu-wrap{
        width: 13%;
        height: 100%;
        .sub-menu{
            margin-top: 20px;
            display: inline-flex;
            flex-direction: column;

            .title-box{
                display: flex;
                gap: 6px;
                align-items: center;
                background: white;
                padding: 6px 20px;
                color: #385493;
                font-size: 16px;
                font-weight: 700;
                border: 1px solid #E4E5E7;
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;

                img{
                width: 28px;
                }
            }
            .menu-list{
                display: flex;
                flex-direction: column;
                margin-left: 30px;
                padding: 16px;
                gap: 24px;
                position: relative;
               
                .list{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: 0.3s;
                    opacity: 0.5;
                    
                    .circle{
                        width: 4px;
                        height: 4px;
                        background: black;
                        border-radius: 4px;
                    }
                    &:hover{
                        opacity:0.8;
                    }
                }
                .select{
                        opacity: 1;
                    }
                .submenu-list{
                    position: absolute;
                    top: calc(100% + 10px);
                    left: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    z-index: 1;
                    
                    .sub-list{
                        cursor: pointer;
                        transition: 0.3s;
                        display: flex;
                        gap: 8px;
                        opacity: 0.5;
                        &.select{
                            opacity: 1;
                        }
                        &:hover{
                            opacity:0.8;
                        }
                    }
                }
            }
        }
    }
    .sub-main{
        width: 87%;
        height: 100%;
        padding: 20px;
        
    }
`

interface SubLayoutProps {
    menu:SubMenuProps;
    children?:JSX.Element
}

const SubLayout = ({menu, children}:SubLayoutProps) => {
    return (
        <StyledSubLayout>
            <div className="sub-menu-wrap">
                <SubMenu {...menu} />
            </div>
            <div className="sub-main">{children}</div>
        </StyledSubLayout>
    )
}

export default SubLayout;