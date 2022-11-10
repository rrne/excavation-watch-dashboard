import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import VibarationTableWrap from '@src/components/component/vibration/VibrationTableWrap'

const Vibration: NextPage = () => {
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
        <SubLayout menu={menu}>
            <VibarationTableWrap/>
        </SubLayout>
  )
}

export default Vibration;
