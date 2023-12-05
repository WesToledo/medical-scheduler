import DatatableBase from '@/components/DatatableBase';
import PatientFileModal from '@/components/PatientFileModal';
import Sidebar from '@/components/Sidebar';
import colors from '@/theme/foundations/colors';
import EditIcon from '@mui/icons-material/Edit';
import { InfoIcon } from '@chakra-ui/icons';
import { Box, Heading, useDisclosure, Stack } from '@chakra-ui/react';
import { IconButton } from '@mui/material';

import { format } from 'date-fns';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';

export default function PatientsPage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const DataTable = () => {
    const columns: MUIDataTableColumn[] = [
      {
        name: 'id',
        label: '',
        options: {
          sort: false,
          display: false,
        },
      },
      {
        name: 'code',
        label: 'Código',
        options: {
          sort: false,
        },
      },
      {
        name: 'name',
        label: 'Nome',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'birthdate',
        label: 'Data de Nascimento',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'email',
        label: 'Email',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'phone',
        label: 'Telefone',
        options: {
          filter: true,
          sort: false,
        },
      },
      {
        name: 'actions',
        label: 'Ações',
        options: {
          sort: false,
        },
      },
    ];

    const data: MUIDataTableProps['data'] = [
      {
        id: 23,
        code: '#1234',
        name: 'Paciente',
        birthdate: format(new Date(), 'dd/MM/yyyy'),
        email: 'mail@mail.com',
        phone: '(11) 12334-43232',
        actions: () => (
          <IconButton aria-label="edit button" size="small" style={{ color: colors.primary[600] }}>
            <EditIcon />
          </IconButton>
        ),
      },
    ];

    const options: MUIDataTableProps['options'] = {
      selectableRows: 'none',
    };

    return (
      <DatatableBase
        columns={columns}
        data={data}
        options={options}
        showAddButton
        addButtonText="Novo Paciente"
        onClickAddButton={onOpen}
      />
    );
  };

  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Pacientes
        </Heading>

        <Box>
          <DataTable />
        </Box>
      </Stack>

      <PatientFileModal isOpen={isOpen} onClose={onClose} />
    </Sidebar>
  );
}
