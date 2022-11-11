import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import CenterChoice from '@src/components/component/user-event/CenterChoice';

const UserEvent: NextPage = () => {

    const menu = {
        title: "사용자알람설정",
        titleImg:"user-event",
        menu:[
            {
                title:"사업소 선택",
                link:"/user-event"
            },
            {
                title:"사용자 선택",
                link:"/user-event/user"
            }
        ]
    }
    
  return (
    <SubLayout menu={menu}>
        <CenterChoice/>
    </SubLayout>
  )
}

export default UserEvent;

