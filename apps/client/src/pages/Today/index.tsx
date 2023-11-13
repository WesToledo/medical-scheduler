import Sidebar from '@/components/Sidebar';
import { Heading, Stack, useDisclosure } from '@chakra-ui/react';

import AddAppointmentModal from './components/AddAppointmentModal';
import Scheduler from './components/Scheduler';

export default function TodayPage() {
  const { onClose, isOpen } = useDisclosure();

  return (
    <>
      <Sidebar>
        <Stack spacing="3">
          <Heading fontWeight={600} fontSize="3xl">
            Hoje
          </Heading>
          <Scheduler data={[]} />
        </Stack>
      </Sidebar>
      <AddAppointmentModal onClose={onClose} isOpen={true} />
    </>
  );
}
