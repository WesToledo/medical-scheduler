import DatatableBase from '@/components/DatatableBase';
import ModalBase from '@/components/ModalBase';
import Sidebar from '@/components/Sidebar';
import { TreatmentSchema } from '@/schemas';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Input,
  ModalBody,
  ModalFooter,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';

import colors from '@/theme/foundations/colors';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function TreatmentsPage() {
  const { onOpen, isOpen, onClose } = useDisclosure();

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
        name: 'name',
        label: 'Nome',
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
          sort: false,
        },
      },
    ];

    const data: MUIDataTableProps['data'] = [
      {
        id: 23,
        name: 'Tratamento',
        value: '$ 200.00',
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
        addButtonText="Novo Médico"
        onClickAddButton={onOpen}
      />
    );
  };

  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Tratamentos
        </Heading>

        <Box>
          <DataTable />
        </Box>
      </Stack>

      <ModalBase isOpen={isOpen} onClose={onClose} title="Novo Tratamento" closeOnOverlayClick={false}>
        <>
          <Formik
            initialValues={{
              name: '',
              value: '',
            }}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
            validationSchema={TreatmentSchema}
          >
            {({ handleSubmit, errors, touched }) => (
              <Form>
                <ModalBody>
                  <Stack spacing="4">
                    <FormControl isInvalid={!!errors.name && touched.name}>
                      <FormLabel fontWeight="bold" fontSize="sm">
                        Nome
                      </FormLabel>
                      <Field as={Input} name="name" type="text" />
                      <ErrorMessage component={FormErrorMessage} name="name" />
                    </FormControl>

                    <FormControl isInvalid={!!errors.value && touched.value}>
                      <FormLabel fontWeight="bold" fontSize="sm">
                        Valor
                      </FormLabel>
                      <Field as={Input} name="value" type="number" step={0.1} />
                      <ErrorMessage component={FormErrorMessage} name="value" />
                    </FormControl>
                  </Stack>
                </ModalBody>

                <ModalFooter>
                  <HStack spacing={4}>
                    <Button colorScheme="primary" onClick={handleSubmit}>
                      Salvar
                    </Button>
                    <Button onClick={onClose}>Cancelar</Button>
                  </HStack>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </>
      </ModalBase>
    </Sidebar>
  );
}
