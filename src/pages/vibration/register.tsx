import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';

const VibrationRegister: NextPage = () => {
    const menu = {
        title: "진동센서관리",
        titleImg:"vibration",
        menu:[
            {
                title:"등록현황",
                link:"/vibration"
            },
            {
                title:"수정/삭제",
                link:"/vibration/modify"
            },
            {
                title:"신규등록",
                link:"/vibration/register"
            }
        ]
    }

  return (
    <div className='vibration'>
        <SubLayout menu={menu} />
    </div>
  )
}

export default VibrationRegister;
