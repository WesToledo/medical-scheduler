import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Card,
  CardBody,
} from '@chakra-ui/react';
import Sidebar from '@/components/Sidebar';

import {
  Agenda,
  Day,
  EventRenderedArgs,
  Inject,
  Month,
  PopupOpenEventArgs,
  ScheduleComponent,
  TimelineViews,
  ViewDirective,
  ViewsDirective,
  Week,
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import { addDays, addHours, format } from 'date-fns';
import { useRef } from 'react';
import Scheduler from './components/Scheduler';

export default function TodayPage() {
  return (
    <Sidebar>
      <Stack spacing="3">
        <Heading fontWeight={600} fontSize="3xl">
          Hoje
        </Heading>
        <Scheduler />
      </Stack>
    </Sidebar>
  );
}
