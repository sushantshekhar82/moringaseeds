import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { Typewriter } from "react-simple-typewriter";
import '../App.css'
import ProductCard from '../components/ProductCard';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import {PiPottedPlantBold} from 'react-icons/pi'
import { GiBoxUnpacking } from 'react-icons/gi';
import ImageCard from '../components/ImageCard';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
const Home = () => {

  return (
    <div>
        <Navbar/>
        <div id="home" className="intro">
      <Grid templateColumns={{base:'1fr',lg:'1fr 1fr'}}  justifyContent={'space-around'} alignItems={'center'} >
        <GridItem padding={'25px'}>
       <Text fontSize={{base:'5xl',md:'7xl',lg:'7xl'}} fontWeight={'bold'} marginTop={{base:'250px',md:'',lg:'230px'}}>
       Moringa Seeds!
          </Text>
         <Text color={'#FFFF00'} fontSize={{base:'2xl',md:'4xl',lg:'4xl'}} fontWeight={'bold'}>
            <span>
              {" "}
              <Typewriter
                words={[
                  "Path to Profitable  Ventures!",
                  "Seed to Superfood",
                  
                  "Seeds gives Lucrative Future!",
                ]}
                loop={500}
                cursor
                cursorStyle={"|"}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
            </Text>

            <Button
             
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'xl'}
              fontWeight={600}
              width={'250px'}
              height={'50px'}
              color={'white'}
              bg={'#1fb125'}
             marginTop={'15px'}
             borderRadius={'8px'}
              _hover={{
                bg: '#1fb125',
              }}>
             Buy Now
            </Button>
        
        </GridItem>
        <GridItem  justifyContent={'center'} alignItems={'center'} >
     
        </GridItem>
      </Grid>
      </div>
 

      <Box padding={'10px'}>
        <Text as={'h1'} fontSize={{base:'4xl',md:'5xl',lg:'5xl'}} fontWeight={'bold'}  marginBottom={'5px'}  color={'#1fb125'}>Brands We sell</Text>
      <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr 1fr',lg:'1fr 1fr 1fr'}}  justifyContent={'center'} alignItems={'center'} gap={'10px'}>
           <GridItem>
           <ImageCard imageUrl="./brand1.webp" text="ODC 3 Seeds" href="/" />
           </GridItem>
           <GridItem>  <ImageCard imageUrl="./brand3.webp" text="Bhagya KDM 01 Seeds" href="/" /></GridItem>
           <GridItem>  <ImageCard imageUrl="./brand2.webp" text="PKM Seeds" href="/" /></GridItem>
      </Grid>
      </Box>
   <ImageGallery/>
  <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr 1fr',lg:'1fr 1fr 1fr'}} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
      <GridItem justifyContent={'center'} alignItems={'center'} >
         <Image src='./seeds.png' alt="seed image " margin={'auto'}/>
      <Text  as={'h1'} fontSize={{base:'3xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'}>Bhagya KDM 01 Seeds</Text>
      <Text as={'h3'} fontSize={{base:'xl',md:'xl',lg:'xl'}}> Purchase Bhagya KDM 01 Seeds Drumstick from Reddy Agric farmers for your agricultural needs. Our high-quality seeds ensure healthy and productive drumstick crops. Order now and experience the excellence of Reddy Agric farmers</Text>
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#1fb125'}
             
              _hover={{
                bg: '#1fb125',
              }}>
             Buy Now
            </Button>
      </GridItem>
      <GridItem>
          <Grid gridTemplateRows={{base:'100%',md:'80% 20%',lg:'80% 20%'}} justifyContent={'center'} alignItems={'center'} gap={5}>
          <GridItem marginTop={'10px'}> <Image src='./seeds.png' alt="seed image " margin={'auto'}/>
          <Text  as={'h1'} fontSize={{base:'3xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'}>PKM Seeds Drumstick Seeds</Text>
      <Text as={'h3'} fontSize={{base:'xl',md:'xl',lg:'xl'}} >  PKM Seeds Drumstick seeds from Reddy Agric farmers. Our premium quality seeds guarantee robust and fruitful drumstick plants. Shop now and witness the expertise of Reddy Agric farmers</Text>
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#1fb125'}
             
              _hover={{
                bg: '#1fb125',
              }}>
             Buy Now
            </Button>

</GridItem>
          <GridItem display={{base:'none',md:'block',lg:'block'}}>  <Image src='./moringaleaf.webp' alt="seed image " width={'200px'} margin={'auto'}/></GridItem>
          </Grid>
      </GridItem>
      <GridItem justifyContent={'center'} alignItems={'center'}>  <Image src='./seeds.png' alt="seed image " margin={'auto'}/>
      <Text  as={'h1'} fontSize={{base:'3xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'}>ODC 3 Drumstick Seeds</Text>
      <Text as={'h3'} fontSize={{base:'xl',md:'xl',lg:'xl'}}> Discover the excellence of ODC 3 Drumstick Seeds from Reddy Agric farmers. Our superior quality seeds ensure thriving drumstick plants with abundant yields.</Text>

      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'#1fb125'}
             
              _hover={{
                bg: '#1fb125',
              }}>
             Buy Now
            </Button>
</GridItem>
  </Grid>


     <Box textAlign={'center'}>
        <Text
              color={'#1fb125'}
              marginTop={'20px'}
              fontSize={{base:'4xl',md:'5xl',lg:'5xl'}}
              fontWeight="bold"
            >
           Why you Choose Us
            </Text></Box>
        <Grid templateColumns={{ base: '1fr',md:'1fr 1fr 1fr', lg: '1fr 1fr 1fr' }} gap={'5px'} marginTop="10px" justifyContent={'center'}>
             <GridItem data-aos="zoom-in-right">
             <Box
      bg="purple.700"
      width="90%"
      height="250px"
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      margin={'auto'}
      padding={5}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.2"
        display="flex"
        alignItems="center"
        justifyContent="center"
      
      >
        <Icon as={HiOutlineLightBulb} color="white" fontSize="150px" />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        color="white"
        textAlign="center"
        zIndex="1"
      >
        <Text fontSize="24px" fontWeight={'bold'}>Create Unique</Text>
        <Text fontsize={'16px'}>We were captivated by the uniqueness of your product selection.  We believe in offering our customers a diverse range of high-quality options to suit their individual tastes and styles.</Text>
      </Flex>
    </Box>
             </GridItem>
             <GridItem data-aos="zoom-in-up">
              <Box
      bg="green.500"
      width="90%"
      height="250px"
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      margin={'auto'}
      padding={5}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.2"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={5}
      >
        <Icon as={MdOutlineSupportAgent} color="white" fontSize="150px" />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        color="white"
        textAlign="center"
        zIndex="1"
        
      >
        <Text fontSize="24px" fontWeight={'bold'}>24/7 Support</Text>
        <Text fontsize={'16px'} >Our top priority is customer satisfaction. We commend you 24/7 support and professional approach to serving customers.</Text>
     
      </Flex>
    </Box></GridItem>
              <GridItem data-aos="zoom-in-right"><Box
      bg="orange.500"
      width="90%"
      height="250px"
      position="relative"
      overflow="hidden"
      borderRadius="md"
      boxShadow="md"
      margin={'auto'}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.2"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={GiBoxUnpacking} color="white" fontSize="150px" />
      </Box>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100%"
        color="white"
        textAlign="center"
        zIndex="1"
        padding={5}
      >
        <Text fontSize="24px" fontWeight={'bold'}>Clean Design</Text>
        <Text fontsize={'16px'}>Experience the beauty of our clean, elegant home decor. With simple designs that are sophisticated and timeless, we create spaces that everyone can appreciate.</Text>
     
      </Flex>
    </Box></GridItem>

        </Grid>
        <Footer/>
    </div>
  )
}

export default Home