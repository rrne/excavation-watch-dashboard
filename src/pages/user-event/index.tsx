import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import CenterChoice from '@src/components/component/user-event/CenterChoice';
import menu from '@src/data/menuLink.json'

const UserEvent: NextPage = () => {

    
  return (
    <SubLayout menu={menu.userEvent}>
        <CenterChoice/>
    </SubLayout>
  )
}

export default UserEvent;

