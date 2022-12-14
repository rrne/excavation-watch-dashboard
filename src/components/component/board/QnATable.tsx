import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Button } from '@src/components/component/Button';
import SelectComp from '@src/components/component/Select'
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import qnaData from '@src/data/boardQnAData.json'
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTurnUp } from '@fortawesome/free-solid-svg-icons';

// style✨
const StyledQnATableWrap = styled.div`
     width:100%;
    height: 100%;
    .top-box{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
                font-size: 16px;
                font-weight: 800;
                position: relative;}

        .filter-box{
            display: flex;
            gap: 10px;
            align-items: center;
            .title{
                font-size: 16px;
                font-weight: 600;
                position: relative;
                &:after{
                    content:"";
                    position: absolute;
                    top:50%;
                    right: -15px;
                    width:1px;
                    height:80%;
                    background: #DDDDDD;
                    transform: translate(-50%,-50%);
                }
            }
            .searchInput{
                font-weight: 500;
                padding: 8px 10px;
                background: white;
                border: 1px solid #DEDEDE;
                border-radius: 15px;
                outline: none;
                margin-right: 6px;
            }
           
        }
    }
    .table-box{
        width: 100%;
        height: calc(100% - 46px);
        margin-top: 6px;
        display:flex;
        .ant-table-wrapper{
            width: 100%;
        }
        .reply{
            .replyIcon{
                transform: rotate(90deg);
            }
        }
    }
    .ant-table-row{
      cursor: pointer;
    }
`
const QnATableWrap = () => {
    const selectData = ["제목","작성자"]
    return(
        <Card>
            <StyledQnATableWrap>
            <div className="top-box">
                    <div className="title">Q&A</div>
                    <div className="filter-box">
                    <SelectComp options={selectData} size="small" devaultValue="제목"/>
                        <input type="text" className="searchInput"/>
                        <Button label='검색' size='small' />
                    </div>
                </div>
                <div className="table-box">
                    <QnATable />
                </div>
            </StyledQnATableWrap>
        </Card>
    )
}

export default QnATableWrap;



export interface DataType {
    no?: number;
    title: string;
    writer: string;
    date: string;
    count: number;
    reply?:boolean;
    replyNo?:number;
}

// 테이블 헤더
const columns: ColumnsType<DataType> = [
    {
      title: '번호',
      dataIndex: 'no',
      width: 50,
      align:"center",
      render: (a,b,c) => b.reply ? "" : b.no
    },
    {
      title: '제목',
      dataIndex: 'title',
      width: 500,
      render: (a,b,c) => {
        return(
            b.reply ? <div className="reply">
            <FontAwesomeIcon icon={faArrowTurnUp} className="replyIcon" /> <span>RE: {b.title}</span>
            </div> : b.title
        )
      }
    },
    {
      title: '작성자',
      dataIndex: 'writer',
      width: 100,
      align:"center"
    },
    {
      title: '작성일',
      dataIndex: 'date',
      width: 150,
      align:"center"
    },
    {
      title: '조회수',
      dataIndex: 'count',
      width: 50,
      align:"center"
    }
  ];


const QnATable = () => {
    const router = useRouter();
    const onRowClick = (value:DataType) => {
        router.push({pathname:`/board/qna/${value.no}`,
        query:{data : JSON.stringify(value)}
      }, `/board/qna/${value.no}`)
    }

    return(
        <Table columns={columns} dataSource={qnaData} pagination={{pageSize:15, position: ["bottomCenter"]}} onRow={(record, rowIndex) => {return {onClick: () => {onRowClick(record)}}}} />
    )
}