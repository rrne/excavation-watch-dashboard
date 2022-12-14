import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import menu from '@src/data/menuLink.json';
import NoticeTableWrap from '@src/components/component/board/NoticeTable';

const Board: NextPage = () => {
    
  return (
    <SubLayout menu={menu.board}>
        <NoticeTableWrap />
    </SubLayout>
  )
}

export default Board;
