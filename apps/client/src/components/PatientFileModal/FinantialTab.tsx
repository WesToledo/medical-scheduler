import { Stack } from '@chakra-ui/react';
import { format } from 'date-fns';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';
import TableBase from '../TableBase';
import { Typography } from '@mui/material';

export default function FinantialTab() {
  const columns: MUIDataTableColumn[] = [
    {
      name: 'date',
      label: 'Data',
      options: {
        sort: false,
      },
    },
    {
      name: 'paymentMethod',
      label: 'Forma de Pagamento',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'value',
      label: 'Valor',
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: 'discount',
      label: 'Desconto',
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
    { date: format(new Date(), 'dd/MM/yyyy'), paymentMethod: 'Cartão de Débito', value: '400,00', discount: 'N/A' },
  ];

  return (
    <Stack>
      <TableBase
        columns={columns}
        data={data}
        title={
          <Typography variant="h6" fontWeight="bold">
            Histórico de Pagamentos
          </Typography>
        }
        options={options}
      />
    </Stack>
  );
}
