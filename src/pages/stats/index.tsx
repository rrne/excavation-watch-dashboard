import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import AlarmHistoryTable from '@src/components/component/stats/AlarmHistoryTable';
import menu from '@src/data/menuLink.json'

const Stats: NextPage = () => {
      
  return (
    <SubLayout menu={menu.stats}>
        <AlarmHistoryTable />
    </SubLayout>
  )
}

export default Stats;
