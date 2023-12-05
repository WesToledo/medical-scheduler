import { PasswordField } from '@/components/inputs/PasswordField';
import { SignInSchema } from '@/schemas';
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  Stack,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Logo } from './Logo';

export const Login = () => {
  return (
    <Grid height="100vh" templateRows="repeat(1, 1fr)" templateColumns="repeat(2, 1fr)" gap={4}>
      <Center>
        <GridItem>
          <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
            <Stack spacing="8">
              <Stack spacing="6">
                <Logo />
                <Stack spacing={{ base: '2', md: '3' }} textAlign="center">
                  <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                </Stack>
              </Stack>
              <Box
                py={{ base: '0', sm: '8' }}
                px={{ base: '4', sm: '10' }}
                bg={{ base: 'transparent', sm: 'bg.surface' }}
                boxShadow={{ base: 'none', sm: 'md' }}
                borderRadius={{ base: 'none', sm: 'xl' }}
              >
                <Stack spacing="6">
                  <Formik
                    initialValues={{
                      email: '',
                      password: '',
                    }}
                    onSubmit={(values) => {
                      // same shape as initial values
                      console.log(values);
                    }}
                    validationSchema={SignInSchema}
                  >
                    {({ handleSubmit, errors, touched }) => (
                      <Form>
                        <Stack spacing="">
                          <Stack spacing="5">
                            <FormControl isInvalid={!!errors.email && touched.email}>
                              <FormLabel fontWeight="bold" fontSize="sm">
                                Email
                              </FormLabel>
                              <Field as={Input} name="email" type="email" />
                              <ErrorMessage component={FormErrorMessage} name="email" />
                            </FormControl>
                            <FormControl isInvalid={!!errors.password && touched.password}>
                              <Field as={PasswordField} name="password" type="password" />
                              <ErrorMessage component={FormErrorMessage} name="password" />
                            </FormControl>
                          </Stack>
                          <HStack justify="space-between" gap={3}>
                            <Button variant="text" size="sm">
                              Forgot password?
                            </Button>
                          </HStack>
                          <Stack spacing="6">
                            <Button type="submit" color="primary.600">
                              Sign in
                            </Button>
                          </Stack>
                        </Stack>
                      </Form>
                    )}
                  </Formik>
                </Stack>
              </Box>
            </Stack>
          </Container>
        </GridItem>
      </Center>

      <GridItem backgroundImage="https://via.placeholder.com/150" backgroundSize="cover"></GridItem>
    </Grid>
  );
};
