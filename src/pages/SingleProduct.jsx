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
            <VStack >
           
              <Text fontSize={'2xl'} fontWeight={600} color={useColorModeValue('gray.500', 'gray.400')}>
              Superior Quality ODC 3 Drumstick Seeds from Reddy Agric Farmers
               </Text>
              <Text fontSize={'lg'}>
              Discover the excellence of ODC 3 Drumstick Seeds from Reddy Agric farmers. Our superior quality seeds ensure thriving drumstick plants with abundant yields.
              </Text>
            </VStack>
            <Stack direction="column" alignItems="left" >
            
            <Text>🆓 Postage Charges Free 🆓🚚( 500g 1kg )
</Text>
<Flex alignItems={'center'}>
<MdLocalShipping />
            <Text>2-3 business days delivery</Text>
            </Flex>   
          </Stack>
          <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Price List
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem> Rs 220 - 25g +  Parcel 📦 Charge  60</ListItem>
                  <ListItem> Rs 299 - 50g +  Parcel 📦 Charge 60</ListItem>{' '}
                  <ListItem> Rs 400 - 100g +  Parcel 📦 Charge 60</ListItem>
                  <ListItem> Rs 550 - 150g +  Parcel 📦 Charge 60</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Rs 750 - 250g +  Parcel 📦 Charge 60</ListItem>
                  <ListItem>Rs 1400 - 500gm, Free Delivery 🚚</ListItem>
                  <ListItem>Rs 1400 - 500gm, Free Delivery 🚚</ListItem>
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
 
    </Box>
    <Box padding={'10px'} >
<Text as={'h1'} fontSize={{base:'4xl',md:'5xl',lg:'5xl'}} textAlign={'left'} paddingLeft={'5px'} fontWeight={'bold'}  marginBottom={'5px'}  color={'#1fb125'}>Our Top Selling </Text>
     <Box width={{base:'100%',md:'70%',lg:'70%'}} paddingLeft={'5px'} >
      <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr 1fr',lg:'1fr 1fr 1fr'}}  justifyContent={'left'} alignItems={'center'} gap={'20px'}>
           <GridItem>
           <Link to={'/bhagyakdmseeds'}>
            <Box >
               <Box position={'relative'}>
                <Image src="./brand11.webp"  alt='odc3 seeds' borderRadius={'10px'}/>
                <Box pos={'absolute'} top={'10px'} right={'5px'} width={'40px'} height={'40px'} backgroundColor={'red.600'} color={'white'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
               <Text fontSize={'14px'} fontWeight={'bold'}>-10%</Text>
                </Box>
                </Box>
                <Box float={'left'}>
               <Text fontSize={'2xl'} fontWeight={'bold'}> Bhagya KDM 01 Seeds</Text>
               <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'}
              fontWeight={600} backgroundColor={'white'} border={'1px solid #1fb125'}>Check Price</Button>
                 <Link to="/bhagyakdmseeds">
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              height={'30px'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#1fb125'}
             marginTop={'5px'}
              _hover={{
                bg: '#1fb125',
              }}>
             Buy Now
            </Button>
            </Link>
               </Flex>
               </Box>
            </Box>
            </Link>
           {/* <ImageCard imageUrl="./brand1.webp" text="ODC 3 Seeds" href="/odc3seeds" /> */}
           </GridItem>
           <GridItem>
            <Link to={'/pkmseeds'}>
            <Box >
               <Box position={'relative'}>
                <Image src="./brand12.webp"  alt='odc3 seeds' borderRadius={'10px'}/>
                <Box pos={'absolute'} top={'10px'} right={'5px'} width={'40px'} height={'40px'} backgroundColor={'red.600'} color={'white'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
               <Text fontSize={'14px'} fontWeight={'bold'}>-13%</Text>
                </Box>
                </Box>
                <Box float={'left'}>
               <Text fontSize={'2xl'} fontWeight={'bold'}> PKM Drumstick Seeds</Text>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Button   height={'30px'}   marginTop={'5px'}  fontSize={'sm'}
              fontWeight={600} backgroundColor={'white'} border={'1px solid #1fb125'}>Check Price</Button>
                 <Link to="/pkmseeds">
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              height={'30px'}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#1fb125'}
             marginTop={'5px'}
              _hover={{
                bg: '#1fb125',
              }}>
             Buy Now
            </Button>
            </Link>
               </Flex>
               </Box>
            </Box>
            </Link>
           </GridItem>
         
            </Grid>
      </Box>
      </Box>
            
    <Footer/>
  </Box>


  )
}

export default SingleProduct