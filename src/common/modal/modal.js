import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  const ModalComponet =({isOpen,onClose})=> {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay/>
          <ModalContent>
            <ModalHeader>Informacion de oportunidad</ModalHeader>
            <ModalCloseButton/>
            <ModalBody>  </ModalBody>
          </ModalContent>
        </Modal>
      
    )
  }
  export default ModalComponet;