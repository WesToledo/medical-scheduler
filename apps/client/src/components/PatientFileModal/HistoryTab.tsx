import { Stack } from '@chakra-ui/react';
import Table from '../Table';
import { MUIDataTableColumn, MUIDataTableColumnDef, MUIDataTableProps } from 'mui-datatables';
import { format } from 'date-fns';

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

  const data = [
    { date: format(new Date(), 'dd/MM/yyyy'), doctor: 'Renato', treatment: 'Ponte Ortodentaria', obs: 'N/A' },
  ];

  return (
    <Stack>
      <Table columns={columns} data={data} title="" options={options} />
    </Stack>
  );
}
