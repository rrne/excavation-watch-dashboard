import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import menu from '@src/data/menuLink.json';
import NoticeInfoComp from '@src/components/component/board/NoticeInfoComp';

const Post: NextPage = () => {
    
  return (
    <SubLayout menu={menu.board}>
        <NoticeInfoComp />
    </SubLayout>
    )
}

export default Post;
