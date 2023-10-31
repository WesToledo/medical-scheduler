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
import Table from '@/components/Table';
import PatientFileModal from '@/components/PatientFileModal';

export default function PatientsPage() {
  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Pacientes
        </Heading>

        <PatientFileModal />

        <Box w="100%"></Box>
      </Stack>
    </Sidebar>
  );
}
