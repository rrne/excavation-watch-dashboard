import { Select } from 'antd';
import styled from '@emotion/styled';

const StyledSelect = styled.div<{size:string}>`
  box-sizing: border-box;
  min-width: ${(props) => (props.size  === "default" ? '170px' : "90px")};
  .ant-select{
    width:100%;
  }
  .ant-select-selector{
    border-radius: 20px !important;
  }
`

const SelectComp = ({options, size = "default", devaultValue = "선택하세요"} : {options:string[], size?:string, devaultValue?:string}) => {

  const handleProvinceChange = () => {
  };

  return (
      <StyledSelect size={size}>
        <Select
          defaultValue={devaultValue}
          onChange={handleProvinceChange}
          options={options.map(province => ({ label: province, value: province }))}
        />
      </StyledSelect>
  );
};

export default SelectComp;