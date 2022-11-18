import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import menu from '@src/data/menuLink.json';
import QnATableWrap from '@src/components/component/board/QnATable';

const BoardQnA: NextPage = () => {

  return (
    <SubLayout menu={menu.board}>
        <QnATableWrap />
    </SubLayout>
  )
}

export default BoardQnA;
