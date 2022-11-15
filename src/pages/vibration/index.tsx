import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import VibarationTableWrap from '@src/components/component/vibration/VibrationTableWrap'
import menu from '@src/data/menuLink.json'

const Vibration: NextPage = () => {

  return (
        <SubLayout menu={menu.vibration}>
            <VibarationTableWrap/>
        </SubLayout>
  )
}

export default Vibration;
