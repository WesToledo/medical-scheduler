import Datatable from '@/components/Datatable';
import PatientFileModal from '@/components/PatientFileModal';
import Sidebar from '@/components/Sidebar';
import { InfoIcon } from '@chakra-ui/icons';
import { Box, HStack, Heading, IconButton, Stack } from '@chakra-ui/react';

import { format } from 'date-fns';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';
import { MdPhone } from 'react-icons/md';

export default function PatientsPage() {
  const columns: MUIDataTableColumn[] = [
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
      code: '#1234',
      name: 'Paciente',
      birthdate: format(new Date(), 'dd/MM/yyyy'),
      email: 'mail@mail.com',
      phone: '(11) 12334-43232',
      actions: () => (
        <Stack spacing={4}>
          <IconButton aria-label="Call Sage" variant="outline" icon={<InfoIcon />}></IconButton>
        </Stack>
      ),
    },
  ];

  const options: MUIDataTableProps['options'] = {
    selectableRows: 'single',
  };

  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Pacientes
        </Heading>

        <PatientFileModal />

        <Box w="100%">
          <Datatable columns={columns} data={data} options={options} showAddButton addButtonText="Novo Paciente" />
        </Box>
      </Stack>
    </Sidebar>
  );
}
