import { Stack } from '@chakra-ui/react';
import Table from '../Table';
import { MUIDataTableColumn, MUIDataTableColumnDef, MUIDataTableProps } from 'mui-datatables';
import { format } from 'date-fns';

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
      <Table columns={columns} data={data} title="" options={options} />
    </Stack>
  );
}
