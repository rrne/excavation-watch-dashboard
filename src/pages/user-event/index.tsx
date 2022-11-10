import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';

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
    <div className='user-event'>
         <SubLayout menu={menu} />
    </div>
  )
}

export default UserEvent;

