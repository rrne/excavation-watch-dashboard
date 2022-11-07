import { Select } from 'antd';
import styled from '@emotion/styled';

const StyledButton = styled(Select)(`
box-sizing: border-box;
min-width: 170px;
.ant-select-selector{
  border-radius: 20px !important;
}
`,)

const SelectComp = ({options} : {options:string[]}) => {

  const handleProvinceChange = () => {
  };

  return (
      <StyledButton
        defaultValue={"선택하세요"}
        onChange={handleProvinceChange}
        options={options.map(province => ({ label: province, value: province }))}
      />
  );
};

export default SelectComp;