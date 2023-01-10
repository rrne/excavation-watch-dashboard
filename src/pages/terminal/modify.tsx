import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import VibrationModifyInfo from '@src/components/component/vibration/VibrationModifyInfo';
import menu from '@src/data/menuLink.json'

const VibrationModify: NextPage = () => {

  return (
        <SubLayout menu={menu.terminal}>
            <VibrationModifyInfo/>
        </SubLayout>
  )
}

export default VibrationModify;
