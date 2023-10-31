import { Stack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';
import Table from '../Table';

export default function HistoryTab() {
  const columns: MUIDataTableColumn[] = [
    {
      name: 'date',
      label: 'Data',
      options: {
        sort: false,
      },
    },
    {
      name: 'doctor',
      label: 'Médico',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'treatment',
      label: 'Tratamento',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'obs',
      label: 'Oberservações',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options: MUIDataTableProps['options'] = {
    search: false,
  };

  const data: MUIDataTableProps['data'] = [
    { date: format(new Date(), 'dd/MM/yyyy'), doctor: 'Renato', treatment: 'Ponte Ortodentaria', obs: 'N/A' },
  ];

  return (
    <Stack>
      <Table columns={columns} data={data} title="" options={options} />
    </Stack>
  );
}
