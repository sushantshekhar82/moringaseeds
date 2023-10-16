import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Checkbox, Divider, Flex, FormControl, Grid, GridItem, Heading, Image, Input, Stack, Text, Textarea, useColorModeValue } from '@chakra-ui/react'
import { Helmet } from 'react-helmet';

import { BsWhatsapp,BsMailbox2}from 'react-icons/bs'
import { HiOutlineLocationMarker}from 'react-icons/hi'
import {AiOutlinePhone} from 'react-icons/ai'
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <Box>
     <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Reddy Agric where all best quality drumstick seeds or moringa seeds you get. Contactus:8123143554 whatsappus:8123811002 mailus:reddyagric@gmail.com"/>
<meta name="keywords" content="moringaseeds, drumstickseeds, reddyagric,moringaseeds contact, reddyagric moringaseeds, reddyagric durmstickseeds, reddyagric contact, reddyagric moringaseeds contact , reddyagric durmstickseeds contact,"/>
<title>Reddy Agric Moringa Seeds | Drumstick Seeds </title>
</Helmet>
        <Navbar/>
        <Box className='outerbox'>
    <Box className='zindex'  width={{base:'90%',lg:'50%'}} margin={'auto'} textAlign={{ base: 'justify', lg: 'justify' }} padding={5} marginTop={'90px'}  >
                <Text fontSize={'3xl'} fontWeight={'bold'} color={'white'} >Call Us</Text>
                <Text fontSize={'md'} color={'white'}>We are always ready to help you.</Text>
                <Flex color={'white'}  alignItems={'center'} gap={2}fontSize={'2xl'}><AiOutlinePhone fontSize={'30px'}/><Text fontWeight={'bold'}> 8123143554
</Text></Flex>

                <Divider margin={'15px'}/>
                <Text fontSize={'3xl'} fontWeight={'bold'} color={'white'} >Email Us</Text>
                <Text fontSize={'md'} color={'white'}>You can directly contact us by sending Email</Text>
                <Flex color={'white'}  alignItems={'center'} gap={2}   ><BsMailbox2 fontSize={'40px'}/><Text fontSize={'18px'} fontWeight={'bold'} > reddyagric@gmail.com
</Text></Flex>
                <Divider  margin={'15px'}/>
                <Text fontSize={'3xl'} fontWeight={'bold'} color={'white'} >Chat</Text>
                <Text fontSize={'md'} color={'white'}>Chat with us on Whatsapp we try to understand your need provide what you acutally want.</Text>
                <Flex color={'white'}  alignItems={'center'} gap={2} fontSize={'2xl'}><BsWhatsapp/><Text fontWeight={'bold'}> 8123143554
</Text></Flex>

            </Box>
           
            </Box>
            <Footer/>
   </Box>
  )
}

export default Contact