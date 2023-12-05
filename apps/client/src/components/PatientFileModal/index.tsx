import {
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import InfoTab from './InfoTab';
import ArquivesTab from './ArquivesTab';
import HistoryTab from './HistoryTab';
import FinantialTab from './FinantialTab';

interface PatientFileModalProps extends ModalProps {}

export default function PatientFileModal({ isOpen, onClose }: PatientFileModalProps) {
  const [editMode, setEditMode] = useBoolean();

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay bg="whiteAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>Ficha do Paciente</ModalHeader>
          <ModalCloseButton />
          <ModalBody minHeight={550}>
            <Tabs colorScheme="primary">
              <TabList mb="1em">
                <Tab fontWeight="bold">Informações</Tab>
                <Tab fontWeight="bold">Arquivos</Tab>
                <Tab fontWeight="bold">Histórico</Tab>
                <Tab fontWeight="bold">Faturação</Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={0}>
                  <InfoTab />
                </TabPanel>
                <TabPanel p={0}>
                  <ArquivesTab />
                </TabPanel>
                <TabPanel p={0}>
                  <HistoryTab />
                </TabPanel>
                <TabPanel p={0}>
                  <FinantialTab />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <HStack spacing={4}>
              {editMode ? (
                <Button colorScheme="primary" onClick={setEditMode.on}>
                  Edit
                </Button>
              ) : (
                <Button colorScheme="primary" onClick={setEditMode.off}>
                  Save
                </Button>
              )}
              <Button onClick={onClose}>Close</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
