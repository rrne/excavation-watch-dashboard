import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";

const StyledUserChoice = styled.div`
    width: 100%;
    height: 100%;
    .title-box {
        width: 100%;
        display: flex;
        .title {
                font-size: 16px;
                font-weight: 800;
                position: relative;
            }
    }
`

const UserChoice = () => {
    return(
        <Card>
            <StyledUserChoice>
            <div className="title-box">
                <div className="title">진동센서 알람 받을 사용자 선택</div>
                <div className="all-check"></div>
                </div>
            </StyledUserChoice>
        </Card>
    )
}

export default UserChoice;