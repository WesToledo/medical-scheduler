import { Box, Text } from '@chakra-ui/react';

import { L10n, loadCldr } from '@syncfusion/ej2-base';
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
  WorkWeek,
} from '@syncfusion/ej2-react-schedule';
import { addHours } from 'date-fns';
import { useRef } from 'react';
import './styles.css';

import {} from '@syncfusion/ej2-base';

import * as gregorian from 'cldr-data/main/pt-PT/ca-gregorian.json';
import * as numbers from 'cldr-data/main/pt-PT/numbers.json';
import * as datimeZoneNames from 'cldr-data/main/pt-PT/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';

loadCldr(numberingSystems, gregorian, numbers, datimeZoneNames);

export interface AppointmentDataObject {
  id: number;
  title: string;
  StartTime: Date;
  EndTime: Date;
  description: string;
  color: string;
}

interface SchedulerProps {
  data: AppointmentDataObject[];
}

L10n.load({
  'pt-PT': {
    schedule: {
      day: 'Dia',
      week: 'Semana',
      workWeek: 'Semana',
      month: 'Mês',
      agenda: 'Agenda',
      weekAgenda: 'Agenda Semanal',
      monthAgenda: 'Agenda Mensal',
      today: 'Hoje',
      noEvents: 'Sem eventos',
      emptyContainer: 'Não há eventos para esse dia',
      allDay: 'Dia todo',
      start: 'Começo',
      end: 'Fim',
      more: 'mais',
      close: 'Fechar',
      cancel: 'Cancelar',
      noTitle: '(Sem Título)',
      delete: 'Deletar',
      deleteEvent: 'Deletar Evento',
      deleteMultipleEvent: 'Deletar Multiplos Eventos',

      previous: 'Anterior',
      next: 'Próximo',
      timelineDay: 'Timeline Day',
      timelineWeek: 'Timeline Week',
      timelineWorkWeek: 'Timeline Work Week',
      timelineMonth: 'Timeline Month',
      expandAllDaySection: 'Expand',
      collapseAllDaySection: 'Collapse',
    },
    calendar: {
      today: 'Hoje',
      monday: 'Seg',
    },
  },
});

export default function Scheduler({}: SchedulerProps) {
  const scheduleObj = useRef(null);

  const timeScale = {
    //If set to false, all the appointments of a day
    // will be displayed one below the other with no gridlines displayed.
    enable: true,
    // Interval in the time axis (vertical)
    interval: 60,
    // how many slots should be displayed in each time interval
    slotCount: 6,
  };

  const data: AppointmentDataObject[] = [
    {
      id: 1,
      title: '8:00 AM',
      StartTime: new Date(2023, 10, 8, 12, 0),
      EndTime: new Date(2023, 10, 8, 13, 0),
      description: 'Monica Medeiros',
      color: 'blue',
    },
    {
      id: 2,
      title: '9:00 AM',
      StartTime: new Date(2023, 10, 9, 12, 0),
      EndTime: new Date(2023, 10, 9, 13, 0),
      description: 'Monica Medeiros',
      color: 'blue',
    },
  ];
  const onEventRendered = (args: EventRenderedArgs) => {
    // change background color from card
    args.element.style.backgroundColor = args.data.color;
  };

  const dayEventTemplate = ({ title, description }: AppointmentDataObject) => {
    return (
      <Box className="template-wrap" m={2} overflow="hidden">
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
      </Box>
    );
  };

  const workWeekEventTemplate = ({ title, description }: AppointmentDataObject) => {
    return (
      <Box className="template-wrap" m={2} overflow="hidden">
        <Text fontWeight="bold">{title}</Text>
        <Text>{description}</Text>
      </Box>
    );
  };

  const monthEventTemplate = ({ title, description }: AppointmentDataObject) => {
    return (
      <Box className="template-wrap" ml={1} overflow="hidden">
        <Text>{description}</Text>
      </Box>
    );
  };

  const eventSettings = { dataSource: data };

  const popupOpen = (args: PopupOpenEventArgs) => {
    args.cancel = true;
    let isEmptyCell =
      args!.target.classList.contains('e-work-cells') || args!.target.classList.contains('e-header-cells'); // checking whether the cell is empty or not

    if (isEmptyCell) {
      console.log('cell empty');
    } else {
      console.log('with event');
    }

    console.log('args', args);
  };

  return (
    <ScheduleComponent
      ref={scheduleObj}
      eventRendered={onEventRendered}
      popupOpen={popupOpen}
      eventSettings={eventSettings}
      width="100%"
      height="700px"
      selectedDate={new Date()}
      timeScale={timeScale}
      startHour="07:00"
      endHour="18:00"
      allowMultiCellSelection={false}
      allowDragAndDrop={false}
      locale="pt-PT"
    >
      <ViewsDirective>
        <ViewDirective option="Day" eventTemplate={dayEventTemplate} />
        <ViewDirective option="WorkWeek" eventTemplate={workWeekEventTemplate} />
        <ViewDirective option="Month" eventTemplate={monthEventTemplate} showWeekend={false} />
      </ViewsDirective>
      <Inject services={[Day, WorkWeek, Agenda, Month, TimelineViews]} />
    </ScheduleComponent>
  );
}
