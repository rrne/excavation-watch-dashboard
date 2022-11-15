import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import AlarmCountTable from '@src/components/component/stats/AlarmCountTable';
import menu from '@src/data/menuLink.json'

const StatsAlarm: NextPage = () => {

  return (
    <SubLayout menu={menu.stats}>
        <AlarmCountTable/>
    </SubLayout>
  )
}

export default StatsAlarm;
