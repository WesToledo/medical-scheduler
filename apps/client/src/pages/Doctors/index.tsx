import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Icon,
  useColorModeValue,
  createIcon,
  Stack,
  useDisclosure,
  ModalBody,
  ModalFooter,
  HStack,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import { MUIDataTableColumn, MUIDataTableProps } from 'mui-datatables';
import { format } from 'date-fns';
import { InfoIcon } from '@chakra-ui/icons';
import DatatableBase from '@/components/DatatableBase';
import ModalBase from '@/components/ModalBase';
import { DoctorSchema, SignInSchema } from '@/schemas';

import EditIcon from '@mui/icons-material/Edit';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { IconButton } from '@mui/material';
import colors from '@/theme/foundations/colors';

export default function DoctorsPage() {
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
        name: 'specialty',
        label: 'Especialidade',
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
        name: 'Paciente',
        specialty: 'Médico Dentista',
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
          Médicos
        </Heading>

        <Box>
          <DataTable />
        </Box>
      </Stack>

      <ModalBase isOpen={isOpen} onClose={onClose} title="Novo Médico" closeOnOverlayClick={false}>
        <>
          <Formik
            initialValues={{
              name: '',
              specialty: '',
            }}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
            validationSchema={DoctorSchema}
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

                    <FormControl isInvalid={!!errors.specialty && touched.specialty}>
                      <FormLabel fontWeight="bold" fontSize="sm">
                        Especialidade
                      </FormLabel>
                      <Field as={Input} name="specialty" type="text" />
                      <ErrorMessage component={FormErrorMessage} name="specialty" />
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
