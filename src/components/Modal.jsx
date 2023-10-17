import React, { useEffect, useState } from 'react';
import { Box, Button, CloseButton, Input, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Text, Grid, GridItem, Image, Stack } from '@chakra-ui/react';

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
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} closeOnOverlayClick={false} size="5xl" isCentered>
      <ModalOverlay />
      <ModalContent bgImage="url(./pattern.webp)" bgSize="cover" minHeight="500px">
        <ModalHeader display="flex" justifyContent="space-between" alignItems="center">
          
          <CloseButton size="lg" color={'white'} onClick={() => setIsOpen(false)} />
        </ModalHeader>
        <ModalBody>

       
       
  <Box padding={'10px'} >
    <Grid templateColumns={{base:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}} justifyContent={'center'} alignItems={'center'}>
           <GridItem justifyContent={'center'} alignItems={'center'}>
            <Image src="./contact.webp" alt="contactus image" display={{base:'none',md:'block',lg:'block'}} />
           </GridItem>
           <GridItem width={{base:'100%'}}>
           <Stack spacing={8} mx={'auto'}  py={5} px={2}  justifyContent={'center'} alignItems={'center'}>
        <Stack align={'center'}>
        <Box  margin={'auto'} paddingRight={'20px'}>
          <Text textAlign={'center'} fontSize={'2rem'} fontWeight={'bold'} color={'white'}>Get Quotes</Text>
          <Text textAlign={'center'} fontSize={{base:'12px',md:'md',lg:'md',}} fontWeight={'bold'} color={'white'}>  Our Representatives will reach you in few moments ✌️</Text>
          </Box>
        </Stack>
        <Box className="form">
        <form action="mailto:reddyagric@gmail.com" method="post" enctype="text/plain" autoComplete='off'>
   
    <input type="text" name="Name" placeholder="Name" required/><br/>
    <input type="number" name="contact number" placeholder='Contact Number' required minLength='10' maxLength='10'/>
    <input type="text" name="city" placeholder='City' required/>
    <input type="email" name="email" placeholder="Your Email" required/><br/>
    
    <textarea name="body" rows="5" cols="30" placeholder="Your Message here" required></textarea><br/>
    <input type="submit" value="Submit" style={{backgroundColor:'#1fb125',fontsize:'18px',fontWeight:'bold',color:'white',border:'none',cursor:'pointer'}} />
  </form>
  </Box>
      </Stack>
           </GridItem>
        </Grid>
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