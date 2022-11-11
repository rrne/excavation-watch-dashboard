import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Checkbox, Table } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import UsereventCenter from '@src/data/UsereventCenter.json';
import { useEffect, useState } from 'react';

const StyledCenterChoice = styled.div`
    width: 100%;
    height: 100%;
    .title-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .ant-checkbox-wrapper {
            color: #385493;
        }
        .title {
            font-size: 16px;
            font-weight: 800;
            position: relative;
        }
    }
`

const CenterChoice = () => {

    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
    };

    return(
        <Card>
            <StyledCenterChoice>
                <div className="title-box">
                    <div className="title">진동센서 알람 받을 사업소 선택</div>
                    <div className="all-check"><Checkbox onChange={onChange}>전체선택(해제)</Checkbox></div>
                </div>
                <CheckBoxTable />
            </StyledCenterChoice>
        </Card>
    )
}

export default CenterChoice;

interface CheckboxTableProps{

}

const CheckBoxTable = () => {

    const columns = ["1차사업소","2차사업소"];
    // const [centerData, setCenterData] = useState<>()
    return(
        <div className="checkbox-table">
            <div className="thead">
                {columns.map((list,i) => <div className="th" key={i}>{list}</div> )}
            </div>
            <div className="tbody">
                {/* {UsereventCenter && UsereventCenter.map} */}
            </div>
        </div>
    )
}