import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import menu from '@src/data/menuLink.json';
import QnAInfoComp from '@src/components/component/board/QnAInfoComp';

const Post: NextPage = () => {
    
  return (
    <SubLayout menu={menu.board}>
        <QnAInfoComp />
    </SubLayout>
    )
}

export default Post;
