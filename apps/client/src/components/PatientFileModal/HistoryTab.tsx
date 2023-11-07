import { Heading, Stack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';
import Table from '../Table';
import { Typography } from '@mui/material';

export default function HistoryTab() {
  const columns: MUIDataTableColumn[] = [
    {
      name: 'id',
      label: 'id',
      options: {
        sort: false,
        display: false,
      },
    },
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
    { id: 23, date: format(new Date(), 'dd/MM/yyyy'), doctor: 'Renato', treatment: 'Ponte Ortodentaria', obs: 'N/A' },
  ];

  return (
    <Stack>
      <Table
        columns={columns}
        data={data}
        title={
          <Typography variant="h6" fontWeight="bold">
            Histórico de Consultas
          </Typography>
        }
        options={options}
      />
    </Stack>
  );
}
