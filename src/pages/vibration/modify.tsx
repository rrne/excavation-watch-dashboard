import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import VibrationModifyInfo from '@src/components/component/vibration/VibrationModifyInfo';

const VibrationModify: NextPage = () => {
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
            <VibrationModifyInfo/>
        </SubLayout>
  )
}

export default VibrationModify;
