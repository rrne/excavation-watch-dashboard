import type { NextPage } from 'next';
import SubLayout from '@src/components/component/SubLayout';
import menu from '@src/data/menuLink.json';
import AdminTableWrap from '@src/components/component/admin/AdminTableWrap';

const Admin: NextPage = () => {
    
  return (
    <SubLayout menu={menu.admin}>
        <AdminTableWrap />
    </SubLayout>
  )
}

export default Admin;
