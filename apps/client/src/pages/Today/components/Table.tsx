import TableBase from '@/components/TableBase';
import { IconButton, Typography } from '@mui/material';
import { format } from 'date-fns';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import colors from '@/theme/foundations/colors';

export default function Table() {
  const columns: MUIDataTableColumn[] = [
    {
      name: 'description',
      label: 'Descrição',
      options: {
        sort: false,
      },
    },
    {
      name: 'quantity',
      label: 'Quantidade',
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
      name: 'actions',
      label: 'Ações',
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const options: MUIDataTableProps['options'] = {
    search: false,
    pagination: false,
    textLabels: {
      body: {
        noMatch: 'Nenhum tratamento adicionado',
      },
    },
  };

  const data = [
    {
      description: 'X-ray',
      quantity: 2,
      value: '400,00',
      actions: () => (
        <>
          <IconButton aria-label="edit button" size="small" style={{ color: colors.primary[600] }}>
            <EditIcon />
          </IconButton>
          <IconButton aria-label="edit button" size="small" style={{ color: colors.red[500] }}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const headerStyles = { style: { textAlign: 'center', fontWeight: 'bold', fontSize: '0.9rem' } };

  return (
    <TableBase
      columns={columns}
      data={data}
      title={
        <Typography variant="h6" fontWeight="bold">
          Tratamentos
        </Typography>
      }
      headerStyles={headerStyles}
      options={options}
      showAddButton
      addButtonText="Add Tratamento"
    />
  );
}
