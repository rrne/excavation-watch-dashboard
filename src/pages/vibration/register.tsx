import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import VibrationRegisterComp from '@src/components/component/vibration/VibrationRegister';
import menu from '@src/data/menuLink.json'

const VibrationRegister: NextPage = () => {

  return (
    <SubLayout menu={menu.vibration}>
        <VibrationRegisterComp/>
    </SubLayout>
  )
}

export default VibrationRegister;
