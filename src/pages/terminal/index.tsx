import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import TerminalTableWrap from '@src/components/component/terminal/TerminalTableWrap'
import menu from '@src/data/menuLink.json'

const Terminal: NextPage = () => {

  return (
        <SubLayout menu={menu.terminal}>
            <TerminalTableWrap/>
        </SubLayout>
  )
}

export default Terminal;
