import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';

const StatsAlarm: NextPage = () => {
    const menu = {
        title: "알람이력/통계",
        titleImg:"stats",
        menu:[
            {
                title:"알림이력",
                link:"/stats"
            },
            {
                title:"통계",
                link:"/stats/count",
                subMenu:[{
                    title:"설치수량",
                    link:"/stats/count"
                },
                {
                    title:"알람횟수",
                    link:"/stats/alarm"
                }
            ]
            }
        ]
    }

  return (
    <SubLayout menu={menu}>
    </SubLayout>
  )
}

export default StatsAlarm;
