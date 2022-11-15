import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import StatsTable from '@src/components/component/stats/StatsTable';
import menu from '@src/data/menuLink.json'

const StatsCount: NextPage = () => {
  return (
    <SubLayout menu={menu.stats}>
        <StatsTable />
    </SubLayout>
  )
}

export default StatsCount;
