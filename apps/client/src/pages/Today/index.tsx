import { Box, Heading, Container, Text, Button, Stack, Icon, useColorModeValue, createIcon } from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';

import { Day, Inject, ScheduleComponent, Week } from '@syncfusion/ej2-react-schedule';

export default function TodayPage() {
  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Tratamentos
        </Heading>
        <ScheduleComponent>
          <Inject services={[Day, Week]} />
        </ScheduleComponent>
      </Stack>
    </Sidebar>
  );
}
