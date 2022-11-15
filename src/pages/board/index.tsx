import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import menu from '@src/data/menuLink.json'

const Board: NextPage = () => {
    
  return (
    <SubLayout menu={menu.board}>
        <div></div>
    </SubLayout>
  )
}

export default Board;
