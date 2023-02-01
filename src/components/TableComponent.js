import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
// import 'rsuite-table/lib/less/index.less'; // or 'rsuite-table/dist/css/rsuite-table.css'

import 'rsuite-table/dist/css/rsuite-table.css';
export default function TableComponent() {
  const dataList = [
    { id: 1, name: 'Chanda,McLoughlin', phone: '362-805-7162', title: 'Account Executive' },
    { id: 2, name: 'Lorrayne,Braybrooke', phone: '983-788-5963', title: 'Account Coordinator' },
    { id: 3, name: 'Gavin,McGirr', phone: '215-993-6388', title: 'Desktop Support Technician' },
    { id: 4, name: 'Helenka,MacGibbon', phone: '422-991-2078', title: 'VP Quality Control' },
    { id: 5, name: 'Dulcinea,McGeechan', phone: '368-748-1624', title: 'VP Accounting' },
    { id: 6, name: 'Chanda,McLoughlin', phone: '362-805-7162', title: 'Account Executive' },
  ];

  return (
    <div>
      <Table height={800} data={dataList}>
        <Column align={'center'} fullText={true} width={100}>
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column align={'center'} fullText={true} width={100} resizable={true}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column align={'center'} fullText={true} width={100} resizable={true}>
          <HeaderCell>Phone</HeaderCell>
          <Cell dataKey="phone"></Cell>
        </Column>

        <Column align={'center'} fullText={true} resizable={true}>
          <HeaderCell>Title</HeaderCell>
          <Cell dataKey="title"></Cell>
        </Column>
      </Table>
    </div>
  );
}
