import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import UserChoice from '@src/components/component/user-event/UserChoice';
import menu from '@src/data/menuLink.json'

const VibrationModify: NextPage = () => {

  return (
    <SubLayout menu={menu.userEvent}>
        <UserChoice/>
    </SubLayout>
  )
}

export default VibrationModify;
