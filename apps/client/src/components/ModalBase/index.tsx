import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalProps } from '@chakra-ui/react';

interface ModalBaseProps extends ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function ModalBase({ isOpen, onClose, title, children, ...props }: ModalBaseProps) {
  return (
    <>
      <Modal isOpen={isOpen} isCentered onClose={onClose} {...props}>
        <ModalOverlay bg="whiteAlpha.300" backdropFilter="blur(10px)" />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          {children}
        </ModalContent>
      </Modal>
    </>
  );
}
