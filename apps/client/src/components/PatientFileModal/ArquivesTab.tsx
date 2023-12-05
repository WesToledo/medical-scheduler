import { Button, Flex, FormControl, FormErrorMessage, Stack } from '@chakra-ui/react';

import { Formik } from 'formik';
import { Upload } from '../UploadZone';
interface FormType {
  image: string;
  title: string;
}

export default function ArquivesTab() {
  return (
    <Flex justify="center" align="center" w="100%">
      <Flex direction="column" w="500px" p="5">
        <Formik
          initialValues={{
            image: null,
          }}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
          }}
          // validationSchema={SignInSchema}
        >
          {({ handleSubmit, errors, touched, setFieldError, setFieldValue }) => (
            <Stack spacing="5">
              <FormControl isInvalid={!!errors.image}>
                <Upload field="image" setValue={setFieldValue} error={errors.image} setError={setFieldError} />
                <FormErrorMessage mt="1">{errors.image}</FormErrorMessage>
              </FormControl>

              <FormControl display="flex" justifyContent="end">
                <Button type="submit" colorScheme="primary">
                  Adicionar
                </Button>
              </FormControl>
            </Stack>
          )}
        </Formik>
      </Flex>
    </Flex>
  );
}

// export default function ArquivesTab() {
//     return <p>Info Tab</p>;
//   }
