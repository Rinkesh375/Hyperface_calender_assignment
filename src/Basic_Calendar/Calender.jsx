import React,{useState} from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text
  } from '@chakra-ui/react'

const localizer = momentLocalizer(moment);




const Calendar = (props) => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleEventClick = (event) => {
        console.log(event)
        setSelectedEvent(event);
        onOpen();
    };

    const handleCloseModal = () => {
        setSelectedEvent(null);
        onClose()
    };


    return  <>
     <BigCalendar {...props}
    localizer={localizer}
    onSelectEvent={handleEventClick} />
   
  
        {selectedEvent && <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">{selectedEvent?.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            {/* <Text>Event Start: {selectedEvent?.start.toLocalString()}</Text> */}
            <Text><strong>Event Start</strong>: {selectedEvent?.start.toLocaleString()}</Text>
            <Text><strong>Event End</strong>: {selectedEvent?.end.toLocaleString()}</Text>
            <Text><strong>Join The Meeting</strong>: {selectedEvent?.url}</Text>
        
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleCloseModal}>
                Close
              </Button>
              
            </ModalFooter>
          </ModalContent>
        </Modal>}
    
    </> ;
};

export default Calendar;
