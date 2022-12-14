import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Button } from '@src/components/component/Button';
import SelectComp from '@src/components/component/Select';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import noticeData from '@src/data/boardNoticeData.json'
import { useRouter } from 'next/router';

// style✨
const StyledNoticeTableWrap = styled.div`
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
            gap: 8px;
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
    }
    .ant-table-row{
      cursor: pointer;
    }
`
const NoticeTableWrap = () => {
    const selectData = ["제목","작성자"];
    return(
        <Card>
            <StyledNoticeTableWrap>
            <div className="top-box">
                    <div className="title">공지사항</div>
                    <div className="filter-box">
                        <SelectComp options={selectData} size="small" devaultValue="제목"/>
                        <input type="text" className="searchInput"/>
                        <Button label='검색' size='small' />
                    </div>
                </div>
                <div className="table-box">
                    <NoticeTable />
                </div>
            </StyledNoticeTableWrap>
        </Card>
    )
}

export default NoticeTableWrap;


export interface DataType {
    no: number;
    title: string;
    writer: string;
    date: string;
    count: number;
}

// 테이블 헤더
const columns: ColumnsType<DataType> = [
    {
      title: '번호',
      dataIndex: 'no',
      width: 50,
      align:"center"
    },
    {
      title: '제목',
      dataIndex: 'title',
      width: 500,
      
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


const NoticeTable = () => {
    const router = useRouter();
    const onRowClick = (value:DataType) => {
        router.push({pathname:`/board/${value.no}`,
        query:{data : JSON.stringify(value)}
      }, `/board/${value.no}`)
    }

    return(
        <Table columns={columns} dataSource={noticeData} pagination={{pageSize:15, position: ["bottomCenter"]}} onRow={(record, rowIndex) => {return {onClick: () => {onRowClick(record)}}}} />
    )
}