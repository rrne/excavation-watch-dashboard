import * as React from 'react';
import SelectUnstyled, {
  selectUnstyledClasses,
  SelectUnstyledProps,
  SelectUnstyledRootSlotProps,
  SelectOption
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };
  
  const Button = React.forwardRef(function Button<TValue extends {}>(
    props: SelectUnstyledRootSlotProps<TValue>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) {
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        {ownerState.open ? <UnfoldMoreRoundedIcon /> : <UnfoldMoreRoundedIcon />}
      </button>
    );
  });
  
  const StyledButton = styled(Button, { shouldForwardProp: () => true })(
    ({ theme }) => `
    font-size: 0.875rem;
    box-sizing: border-box;
    height: 30px;
    min-width: 160px;
    padding: 0px 12px;
    border-radius: 12px;
    text-align: left;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#f7f7f7'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    position: relative;
  
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &.${selectUnstyledClasses.focusVisible} {
      border-color: ${blue[400]};
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `,
  );
  
  const StyledListbox = styled('ul')(
    ({ theme }) => `
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 6px 0;
    min-width: 160px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
  );
  
  const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
  );
  
  const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
  `;
  
  function renderValue(option: SelectOption<number> | null) {
    if (option == null) {
      return <span>전체보기</span>;
    }
  
    return (
      <span>
        {option.label}
      </span>
    );
  }

  const CustomSelect = React.forwardRef(function CustomSelect<TValue extends {}>(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) {
    const slots = {
      root: StyledButton,
      listbox: StyledListbox,
      popper: StyledPopper,
      ...props.slots,
    };
  
    return <SelectUnstyled {...props} ref={ref} slots={slots} />;
  });


 const UnstyledSelectIntroduction = ({selectData}:{selectData:any[]}) => {
    return (
      <CustomSelect renderValue={renderValue}>
        {selectData.map((list,i) => <StyledOption value={list.title} key={i}>{list.title}</StyledOption>)}
      </CustomSelect>
    );
  }

export default UnstyledSelectIntroduction;