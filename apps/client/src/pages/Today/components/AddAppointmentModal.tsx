import colors from '@/theme/foundations/colors';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import { Select } from 'chakra-react-select';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Table from './Table';

interface AddAppointmentModalProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddAppointmentModal({ isOpen, onClose }: AddAppointmentModalProps) {
  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay bg="whiteAlpha.300" backdropFilter="blur(10px)" />
      <ModalContent>
        <ModalHeader>Agendar Consulta</ModalHeader>
        <ModalCloseButton />
        <ModalBody
        // minHeight={550}
        >
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
                      <FormControl isInvalid={!!errors.doctor && touched.doctor}>
                        <FormLabel fontWeight="bold" fontSize="sm">
                          Paciente
                        </FormLabel>
                        <Select
                          selectedOptionColorScheme={'primary'}
                          colorScheme={colors.primary}
                          // selectedOptionStyle={'check'}
                          placeholder="Selecione..."
                          options={[
                            {
                              label: 'Paciente',
                              value: 2,
                            },
                            {
                              label: 'Paciente 2',
                              value: 3,
                            },
                          ]}
                        />
                        <ErrorMessage component={FormErrorMessage} name="doctor" />
                      </FormControl>

                      <FormControl isInvalid={!!errors.birthdate && touched.birthdate}>
                        <FormLabel fontWeight="bold" fontSize="sm">
                          Data e Hora
                        </FormLabel>
                        <Field
                          as={() => (
                            <Input
                              colorScheme="primary"
                              placeholder="Select Date and Time"
                              size="md"
                              type="datetime-local"
                            />
                          )}
                          name="birthdate"
                          type="date"
                        />

                        <ErrorMessage component={FormErrorMessage} name="birthdate" />
                      </FormControl>

                      {/* TABLE */}
                      <Box>
                        <Table />
                      </Box>
                    </Stack>

                    <Stack spacing="4" w="100%">
                      <FormControl isInvalid={!!errors.doctor && touched.doctor}>
                        <FormLabel fontWeight="bold" fontSize="sm">
                          Médicos
                        </FormLabel>
                        <Select
                          selectedOptionColorScheme={'primary'}
                          colorScheme={colors.primary}
                          // selectedOptionStyle={'check'}
                          placeholder="Selecione..."
                          options={[
                            {
                              label: 'Medico',
                              value: 2,
                            },
                            {
                              label: 'Médico',
                              value: 3,
                            },
                          ]}
                        />
                        <ErrorMessage component={FormErrorMessage} name="doctor" />
                      </FormControl>

                      <FormControl isInvalid={!!errors.emergencyContactName && touched.emergencyContactName}>
                        <FormLabel fontWeight="bold" fontSize="sm">
                          Duração
                        </FormLabel>
                        <Field as={Input} name="duration" type="number" />
                        <ErrorMessage component={FormErrorMessage} name="duration" />
                      </FormControl>

                      <FormControl isInvalid={!!errors.obs && touched.obs}>
                        <FormLabel fontWeight="bold" fontSize="sm">
                          Observações
                        </FormLabel>
                        <Field
                          as={() => (
                            <Textarea
                              _hover={{ borderColor: 'primary.600' }}
                              placeholder="Obervações"
                              size="sm"
                              resize="vertical"
                              variant="outline"
                              rows={5}
                            />
                          )}
                          name="obs"
                          type="obs"
                        />
                        <ErrorMessage component={FormErrorMessage} name="obs" />
                      </FormControl>
                    </Stack>
                  </HStack>
                </Form>
              )}
            </Formik>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <HStack spacing={4}>
            <Button colorScheme="primary">Salvar</Button>
            <Button onClick={onClose}>Cancelar</Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
