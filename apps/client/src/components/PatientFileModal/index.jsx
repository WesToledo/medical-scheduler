import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import InfoTab from './InfoTab';
import ArquivesTab from './ArquivesTab';
import HistoryTab from './HistoryTab';
import FinantialTab from './FinantialTab';

export default function PatientFileModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
      >
        Open Modal
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />
        <ModalContent>
          <ModalHeader>Ficha do Paciente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList mb="1em">
                <Tab fontWeight="bold">Informações</Tab>
                <Tab fontWeight="bold">Arquivos</Tab>
                <Tab fontWeight="bold">Histórico</Tab>
                <Tab fontWeight="bold">Faturação</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <InfoTab />
                </TabPanel>
                <TabPanel>
                  <ArquivesTab />
                </TabPanel>
                <TabPanel>
                  <HistoryTab />
                </TabPanel>
                <TabPanel>
                  <FinantialTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            {enableEdit ? <Button onClick={onClose}>Close</Button> : <Button onClick={onClose}>Close</Button>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
