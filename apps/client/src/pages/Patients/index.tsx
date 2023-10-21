import {
  Heading,
  Container,
  Text,
  Button,
  Box,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  Center,
} from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';
import Datatable from '@/components/Datatable';

export default function PatientsPage() {
  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Pacientes
        </Heading>

        <Box w="100%">
          <Datatable />
        </Box>
      </Stack>
    </Sidebar>
  );
}
