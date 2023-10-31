import { Logo } from '@/pages/Login/Logo';
import { SignInSchema } from '@/schemas';
import {
  Container,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  HStack,
  Button,
  Box,
  Select,
  Textarea,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import InputMask from 'react-input-mask';
import { PasswordField } from '../inputs/PasswordField';

export default function InfoTab() {
  return (
    <Stack>
      <Formik
        initialValues={{
          code: '',
          name: '',
          email: '',
          phone: '',
          emergencyContact: '',
          emergencyContactName: '',
          birthdate: '',
          obs: '',
          doctor: '',
          firstAppointment: '',
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
        // validationSchema={SignInSchema}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form>
            <HStack spacing="8" align="stretch">
              <Stack spacing="4" w="100%">
                <FormControl isInvalid={!!errors.code && touched.code}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Código
                  </FormLabel>
                  <Field as={Input} name="code" type="text" />
                  <ErrorMessage component={FormErrorMessage} name="code" />
                </FormControl>
                <FormControl isInvalid={!!errors.name && touched.name}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Nome
                  </FormLabel>
                  <Field as={Input} name="name" type="text" />
                  <ErrorMessage component={FormErrorMessage} name="name" />
                </FormControl>

                <FormControl isInvalid={!!errors.birthdate && touched.birthdate}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Data de Nascimento
                  </FormLabel>
                  <Field as={Input} name="birthdate" type="date" />
                  <ErrorMessage component={FormErrorMessage} name="birthdate" />
                </FormControl>

                <FormControl isInvalid={!!errors.emergencyContact && touched.emergencyContact}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Telefone de Emergência
                  </FormLabel>
                  <Field
                    as={() => <Input as={InputMask} mask="(99) 9999-9999" />}
                    name="emergencyContact"
                    type="text"
                  />
                  <ErrorMessage component={FormErrorMessage} name="emergencyContact" />
                </FormControl>

                <FormControl isInvalid={!!errors.doctor && touched.doctor}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Médico
                  </FormLabel>
                  <Select name="doctor" placeholder="Select option">
                    <option value="option1">Dentista 1</option>
                    <option value="option2">Dentista 2</option>
                    <option value="option3">Dentista 3</option>
                  </Select>
                  <ErrorMessage component={FormErrorMessage} name="doctor" />
                </FormControl>
              </Stack>

              <Stack spacing="4" w="100%">
                <FormControl isInvalid={!!errors.email && touched.email}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Email
                  </FormLabel>
                  <Field as={Input} name="email" type="email" />
                  <ErrorMessage component={FormErrorMessage} name="email" />
                </FormControl>
                <FormControl isInvalid={!!errors.phone && touched.phone}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Telefone Pessoal
                  </FormLabel>
                  <Field as={() => <Input as={InputMask} mask="(99) 9999-9999" />} name="phone" type="text" />
                  <ErrorMessage component={FormErrorMessage} name="phone" />
                </FormControl>

                <FormControl isInvalid={!!errors.emergencyContactName && touched.emergencyContactName}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Nome contato de emergência
                  </FormLabel>
                  <Field as={Input} name="emergencyContactName" type="text" />
                  <ErrorMessage component={FormErrorMessage} name="emergencyContactName" />
                </FormControl>

                <FormControl isInvalid={!!errors.obs && touched.obs}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Observações
                  </FormLabel>
                  <Field
                    as={() => (
                      <Textarea
                        _hover={{ borderColor: 'primary' }}
                        placeholder="Obervações"
                        size="sm"
                        resize="vertical"
                        variant="outline"
                      />
                    )}
                    name="obs"
                    type="obs"
                  />
                  <ErrorMessage component={FormErrorMessage} name="obs" />
                </FormControl>

                <FormControl isInvalid={!!errors.firstAppointment && touched.firstAppointment}>
                  <FormLabel fontWeight="bold" fontSize="sm">
                    Primeira Consulta
                  </FormLabel>
                  <Field as={Input} name="firstAppointment" type="date" />
                  <ErrorMessage component={FormErrorMessage} name="firstAppointment" />
                </FormControl>
              </Stack>
            </HStack>
          </Form>
        )}
      </Formik>
    </Stack>
  );
}
