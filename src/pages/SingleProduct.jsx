import React, { useState } from 'react'
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BsFillTelephoneFill, BsWhatsapp}from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import { Box, Flex, Grid, GridItem, Image,Text,Button, Spinner, useToast, Stack, Heading, useColorModeValue, StackDivider, VStack, SimpleGrid, List, ListItem } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdLocalShipping } from 'react-icons/md'
import { FaCartArrowDown } from 'react-icons/fa'
function Star({ rating }) {
    return (
      <Box display="flex" alignItems="center">
        {Array(5)
          .fill("")
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: "1" }}
                  color={i < rating ? "#e4c72b" : "gray.300"}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf  key={i} style={{ marginLeft: "1" }} />;
            }
            return <BsStar  key={i} style={{ marginLeft: "1", }} />;
          })}
      </Box>
    );
  }
const SingleProduct = () => {
    const [selectedImage, setSelectedImage] = useState('./brand1.webp');
    const thumbnails = [
    
        `./brand2.webp`,
        `./brand3.webp`,
        `./brand1.webp`,
        // Add more images here
      ];
  return (
    <Box >
    <Navbar/>
    <Box marginTop={'80px'} padding={'7px'}>
    <Breadcrumb fontSize={'md'} >
  <BreadcrumbItem>
    <BreadcrumbLink  fontWeight={'bold'} ><Link to="/">Home</Link></BreadcrumbLink>
  </BreadcrumbItem>

  

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink >ODC 3 Drumstick Seeds</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>

</Box>
    <Box width={{base:'95%',md:'95%',lg:'95%'}} margin={'auto'} >
   
      <Grid gridTemplateColumns={{base:'1fr',md:'40% 60%',lg:'40% 60%'}}  marginTop={'10px'} paddingLeft={{base:'0px',lg:'25px'}}>
       <GridItem >
       <Box mt={4}>
      {selectedImage && (
        <Image src={selectedImage} alt="Selected Image" boxSize={{base:'80%',lg:"450px"}} width={{base:'100%',md:'90%',lg:'430px'}}marginLeft={{base:'0px',lg:'5px'}}  borderRadius={'10px'}  />
      )}
    </Box>
        <Flex>
      {thumbnails.map((thumbnail, index) => (
        <Image
          key={index}
          src={thumbnail}
          alt={`Thumbnail ${index}`}
          cursor="pointer"
          onClick={() => setSelectedImage(thumbnail)}
          boxSize="80px"
          m={2}
          borderRadius="md"
          boxShadow={selectedImage === thumbnail ? 'md' : 'none'}
          transition="box-shadow 0.2s"
        />
      ))}
    </Flex>
    </GridItem>
       <GridItem  textAlign={'left'}>
        
       <Text  as={'h1'} fontSize={{base:'3xl',md:'4xl',lg:'5xl'}}  fontWeight={'bold'} >ODC 3 Drumstick Seeds</Text>
     
       
     

      
        <Text marginTop={'-10px'} as={'h4'} fontSize={{base:'md',md:'2xl',lg:'2xl'}} fontWeight={'bold'} >seeds</Text>
     
       
      
       
        <Box marginTop={'10px'} >
       
        </Box>
        <Stack spacing={{ base: 6, md: 10 }}>
       

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Stack direction="row" alignItems="center" >
            <MdLocalShipping />
            
            <Text>2-3 business days delivery</Text>
          </Stack>
          <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>{' '}
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box> 
          </Stack>
          <a href="tel: 8123143554">
           <Button bgColor={'blue.500'}  w={'full'}  mt={1}
            size={'lg'}  rounded={'none'}
            py={'7'}  fontWeight={'bold'} color={'white'} gap={1}  _hover={{bgColor:'blue'}} alignItems={'center'} ><AiOutlinePhone fontSize={'20px'}/>Buy on Call</Button></a>
          <Button
            rounded={'none'}
            w={'full'}
           
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('green.900', 'green.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            gap={1}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
           <FaCartArrowDown/> Buy Now
          </Button>
          <Flex  gap={5} alignItems={'center'} >
       
           {/* <a
            href="https://api.whatsapp.com/send?phone=918123811002&text=Hi%20I%20want%20ODC%203%20Seeds"
            target="_blank"
            rel="noreferrer"
          ><Button bgColor={'green.400'} height={'50px'} color={'white'} fontWeight={'bold'} gap={1} _hover={{bgColor:'green'}} ><BsWhatsapp fontSize={'20px'}/>Buy on Whatsapp</Button></a> */}
          </Flex>
         
        </Stack>
       
       
       </GridItem>
    </Grid>
    <Box>

    </Box>
    <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'2'}
                textAlign={'left'}
                >
               Description
              </Text>
    <Text textAlign={'left'} fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
    <Box textAlign={'left'} mb={'20px'} >
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'2'}
                mt={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Between lugs:
                  </Text>{' '}
                  20 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Bracelet:
                  </Text>{' '}
                  leather strap
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case:
                  </Text>{' '}
                  Steel
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Case diameter:
                  </Text>{' '}
                  42 mm
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Dial color:
                  </Text>{' '}
                  Black
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Crystal:
                  </Text>{' '}
                  Domed, scratch‑resistant sapphire crystal with anti‑reflective treatment
                  inside
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Water resistance:
                  </Text>{' '}
                  5 bar (50 metres / 167 feet){' '}
                </ListItem>
              </List>
            </Box>
    </Box>

           
    <Footer/>
  </Box>


  )
}

export default SingleProduct