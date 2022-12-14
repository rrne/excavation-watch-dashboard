import { Card } from "@src/components/component/Card";
import styled from "@emotion/styled";
import { Button } from '@src/components/component/Button';
import SelectComp from '@src/components/component/Select';
import { Table, Modal } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import vabrationData from '@src/data/vabrationSensor.json';
import {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import UserModifyModal from "./UserModifyModal";
import UserRegisterModal from "./UserRegisterModal";

const StyledAdminTableWrap = styled.div`
    width:100%;
    height: 100%;
    .top-box {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title{
                font-size: 16px;
                font-weight: 800;
                position: relative;
            }
        .filter-box{
            display: flex;
            gap: 12px;
            align-items: center;
            .filter{
                display: flex;
                gap: 6px;
                align-items: center;
                .label{
                    font-weight: 600;
                }
                input{
                    border: 1px solid #DEDEDE;
                    outline: none;
                    padding: 6px 10px;
                    width: 150px;
                    border-radius: 20px;
                }
            }
        }
        }

    .table-box{
        width: 100%;
        height: calc(100% - 46px);
        margin-top: 6px;
        display:flex;
        flex-direction: column;
        position: relative;
        .ant-table-wrapper{
            width: 100%;
            .modifyIcon{
                color: #385493;
                font-size: 16px;
                cursor: pointer;
                transition: 0.2s;
                padding: 2px;
                &:hover{
                    color: #6f87be;
                }
            }
        }
        .button-box{
            position: absolute;
            bottom: 4px;
            right: 4px;
            display: flex;
            gap: 10px;
            align-items: center;
            .exel{
                width:36px;
                cursor: pointer;
                opacity: 1;
                transition: 0.3s;
                img{
                    width: 100%;
                }
                &:hover{
                    opacity: 0.7;
                }
            }
        }
    }
    
`

const AdminTableWrap = () => {
    const [selectData, setSelectData] = useState<string[]>([""]);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

    useEffect(() => {
        const selectArr = [];
        for(let i =0 ; i< vabrationData.length; i++){
            selectArr.push(vabrationData[i].title)
        }
        setSelectData(selectArr)
    },[])

    
    const openRegisterModal = () => {
      setIsRegisterModalOpen(true)
    }

    const closeRegisterModal = () => {
      setIsRegisterModalOpen(false)
    }
    return(
        <Card>
            <StyledAdminTableWrap>
            <div className="top-box">
                    <div className="title">관리자/사용자 관리</div>
                    <div className="filter-box">
                        <div className="filter">
                            <span className="label">사용자 ID</span>
                            <input type="text" />
                        </div>
                        <div className="filter">
                            <span className="label">이름</span>
                            <input type="text" />
                        </div>
                        <div className="filter">
                            <span className="label">부서명</span>
                            <SelectComp options={selectData} devaultValue="제목"/>
                        </div>
                        <Button label='검색' size='small' />
                    </div>
                </div>
                <div className="table-box">
                    <AdminTable />
                    <div className="button-box">
                        <div className="exel"><img src={require('public/image/icon/exel.png')} alt="" /></div>
                        <Button label="삭제" size="small" color="sub"/>
                        <Button label="사용자 등록" onClick={openRegisterModal}/>
                    </div>
                </div>
                <Modal open={isRegisterModalOpen} footer={null} closable={false}>
                  <UserRegisterModal close={closeRegisterModal} />
                </Modal>
            </StyledAdminTableWrap>
        </Card>
    )
}

export default AdminTableWrap;

export interface DataType {
    key: React.Key;
    no: number;
    id: string;
    name: string;
    center: string;
    position: string;
    first: string;
    second: string;
    call: string;
    email: string;
    time: string;
}



  const data: DataType[] = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      no: i + 1,
      id:`abs${i}`,
      name: `abc${i}`,
      center:`center${i}`,
      position:`position${i}`,
      first:`사업소${i}`,
      second:`2차사업소${i}`,
      call:`010-1234-567${i}`,
      email:`asas${i}@hanmail.net`,
      time:`2022-12-01 11:02:${i}`
    });
  }

const AdminTable = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [isModifyModalOpen, setIsModifyModalOpen] = useState(false);
    const [modifyData, setModifyData] = useState<DataType>({
      key: 0,
      no: 0,
      id: "",
      name:"",
      center: "",
      position:"",
      first: "",
      second: "",
      call: "",
      email:"",
      time: "",
      })

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
      };

      // 테이블 헤더
    const columns: ColumnsType<DataType> = [
      {
        title: '번호',
        dataIndex: 'no',
      },
      {
        title: '사용자 ID',
        dataIndex: 'id',
      },
      {
        title: '이름',
        dataIndex: 'name',
      },
      {
        title: '부서',
        dataIndex: 'center',
      },
      {
        title: '직책',
        dataIndex: 'position',
      },
      {
        title: '1차사업소',
        dataIndex: 'first',
      },
      {
        title: '2차사업소',
        dataIndex: 'second',
      },
      {
        title: '연락처',
        dataIndex: 'call',
      },
      {
        title: '이메일',
        dataIndex: 'email',
      },
      {
        title: '등록 일시 (최신)',
        dataIndex: 'time',
      },
      {
        title: '수정',
        dataIndex: 'modify',
        render: (_, value) => <span className="modifyIcon" onClick={() => openModifyModal(value)}><FontAwesomeIcon icon={faPenToSquare} /></span>,
        width:60,
        align:"center"
      }
    ];

    const openModifyModal = (value:DataType) => {
      setIsModifyModalOpen(true)
      setModifyData(value)
    }

    const closeModifyModal = () => {
      setIsModifyModalOpen(false)
    }

     
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
      };

    return (
      <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{pageSize:15, position: ["bottomCenter"]}} tableLayout="auto" scroll={{y: "calc(100% - 50px)"}}
        />
       <Modal open={isModifyModalOpen} footer={null} closable={false}>
        <UserModifyModal value={modifyData} close={closeModifyModal} />
       </Modal>
      
      </>
        
    )
}