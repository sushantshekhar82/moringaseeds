import React, { useEffect, useState } from 'react';
import { Box, Button, CloseButton, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text } from '@chakra-ui/react';

const HomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOverlayClick={false} size="3xl" isCentered>
      <ModalOverlay />
      <ModalContent bgImage="url(./pattern.webp)" bgSize="cover" minHeight="500px">
        <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
          
          <CloseButton size="lg" color={'white'} onClick={() => setIsOpen(false)} />
        </ModalHeader>
        <ModalBody>
        <Box position="relative" display="inline-block" width={'100%'}>
            <Box  margin={'auto'} paddingRight={'20px'}>
          <Text textAlign={'center'} fontSize={'2rem'} fontWeight={'bold'} color={'white'}>Get Quotes</Text>
          <Text textAlign={'center'} fontSize={'md'} fontWeight={'bold'} color={'white'}>  Our Representatives will reach you in few moments ✌️</Text>
          </Box>
          </Box>
          <Box className="form">
        <form action="mailto:reddyagric@gmail.com" method="post" enctype="text/plain" autoComplete='off'>
   
    <input type="text" name="Name" placeholder="Name" required/><br/>
    <input type="number" name="contact number" placeholder='Contact Number' required min="10" max="10"/>
    <input type="text" name="city" placeholder='City' required/>
    <input type="email" name="email" placeholder="Your Email" required/><br/>
    
    <textarea name="body" rows="5" cols="30" placeholder="Your Message here" required></textarea><br/>
    <input type="submit" value="Submit" style={{backgroundColor:'#1fb125',fontsize:'18px',fontWeight:'bold',color:'white',border:'none',cursor:'pointer'}} />
  </form>
  </Box>
        </ModalBody>
        <ModalFooter>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const BlinkingText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <span style={{ visibility: isVisible ? 'visible' : 'hidden', fontSize: '2rem', color: 'white', fontWeight: 'bold', margin:'auto',textAlign:'center' }}>{text}</span>;
};

export default HomeModal;