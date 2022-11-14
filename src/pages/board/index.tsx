import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';

const Board: NextPage = () => {
    const menu = {
        title: "게시판",
        titleImg:"board",
        menu:[
            {
                title:"공지사항",
                link:"/board"
            },
            {
                title:"Q&A",
                link:"/board/qna"
            }
        ]
    }
    
  return (
    <SubLayout menu={menu}>
    </SubLayout>
  )
}

export default Board;
