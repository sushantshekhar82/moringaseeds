import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Grid, GridItem, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react'
import { Typewriter } from "react-simple-typewriter";
import '../App.css'
import { Helmet } from 'react-helmet';
import ProductCard from '../components/ProductCard';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import {PiPottedPlantBold} from 'react-icons/pi'
import { GiBoxUnpacking } from 'react-icons/gi';
import ImageCard from '../components/ImageCard';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { BiLogoWhatsapp, BiRightArrow } from 'react-icons/bi';
import HomeModal from '../components/Modal';
import Carousel from '../components/SliderwithText';
import Slider from '../components/Slider';
import { ArrowRightIcon } from '@chakra-ui/icons';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
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
                color={i < rating ? "#e4c72b" : "#e4c72b"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf  key={i} style={{ marginLeft: "1" }} color='#e4c72b' />;
          }
          return <BsStar  key={i} style={{ marginLeft: "1", }} />;
        })}
    </Box>
  );
}


const Home = () => {

  return (
    <div>
       <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Reddy Agric where all best quality drumstick seeds or moringa seeds you get. Contactus:8123143554 whatsappus:8123811002 mailus:reddyagric@gmail.com"/>
<meta name="keywords" content="moringaseeds, drumstickseeds, reddyagric,moringaseeds contact, reddyagric moringaseeds, reddyagric durmstickseeds, reddyagric contact, reddyagric moringaseeds contact , reddyagric durmstickseeds contact,"/>
<title>Reddy Agric Moringa Seeds | Drumstick Seeds </title>
</Helmet>
        <Navbar/>
        <HomeModal/>
        <Box marginTop={'80px'}>
        <Slider/>
        </Box>
       

     
 

     
      <Box padding={'10px'} >
      <Text as={'h1'} fontSize={{base:'4xl',md:'5xl',lg:'5xl'}} textAlign={'left'} paddingLeft={'5px'} fontWeight={'bold'}  marginBottom={'5px'}  color={'black'}>Our Top Selling </Text>
     <Box width={{base:'100%',md:'100%',lg:'100%'}} paddingLeft={'5px'} >
      <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr 1fr 1fr',lg:'1fr 1fr 1fr 1fr'}}  justifyContent={'center'} alignItems={'center'} gap={'20px'}>
           <GridItem>
           <Link to={'/products'}>
            <Box >
               <Box position={'relative'}>
                <Image src="./brand11.webp"  alt='odc3 seeds' borderRadius={'10px'}/>
                <Box pos={'absolute'} top={'10px'} right={'5px'} width={'40px'} height={'40px'} backgroundColor={'red.600'} color={'white'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
               <Text fontSize={'14px'} fontWeight={'bold'}>-10%</Text>
                </Box>
                </Box>
                <Box float={'left'}>
               <Text fontSize={'2xl'} fontWeight={'bold'}> Bhagya KDM 01 Seeds</Text>
               <Flex>
               <Star rating={4.2} />
               (15)
               </Flex>
               <Flex justifyContent={'space-between'} alignItems={'center'}>
               
                 <Link to="/products">
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
             Check Now
            </Button>
            </Link>
               </Flex>
               </Box>
            </Box>
            </Link>
           {/* <ImageCard imageUrl="./brand1.webp" text="ODC 3 Seeds" href="/odc3seeds" /> */}
           </GridItem>
           <GridItem>
            <Link to={'/products'}>
            <Box >
               <Box position={'relative'}>
                <Image src="./brand12.webp"  alt='odc3 seeds' borderRadius={'10px'}/>
                <Box pos={'absolute'} top={'10px'} right={'5px'} width={'40px'} height={'40px'} backgroundColor={'red.600'} color={'white'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
               <Text fontSize={'14px'} fontWeight={'bold'}>-13%</Text>
                </Box>
                </Box>
                <Box float={'left'}>
               <Text fontSize={'2xl'} fontWeight={'bold'}> PKM Drumstick Seeds</Text>
               <Flex>
               <Star rating={4.7} />
               (18)
               </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
               
                 <Link to="/products">
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
             Check Now
            </Button>
            </Link>
               </Flex>
               </Box>
            </Box>
            </Link>
           </GridItem>
           <GridItem>
            <Link to={'/products'}>
            <Box  >
               <Box position={'relative'}>
                <Image src="./brand13.webp"  alt='odc3 seeds' borderRadius={'10px'}/>
                <Box pos={'absolute'} top={'10px'} right={'5px'} width={'40px'} height={'40px'} backgroundColor={'red.600'} color={'white'} borderRadius={'50%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
               <Text fontSize={'14px'} fontWeight={'bold'}>-15%</Text>
                </Box>
                </Box>
                <Box float={'left'}>
               <Text fontSize={'2xl'} fontWeight={'bold'}> ODC 3 Drumstick Seeds</Text>
               <Flex>
               <Star rating={5} />
               (22)
               </Flex>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
              
                 <Link to="/odc3seeds">
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
              }}
              
              >
             Check Now
            </Button>
            </Link>
               </Flex>
               </Box>
            </Box>
            </Link>
         
           </GridItem>
           <GridItem>
           <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
              width={'250px'}
              fontSize={'xl'}
              fontWeight={600}
              color={'white'}
              bg={'#1fb125'}
              marginTop={'5px'}
              _hover={{
                bg: '#1fb125',
              }}
              gap={2}
              alignItems={'center'}>
            More Products <ArrowRightIcon/>
            </Button>
           </GridItem>
            </Grid>
      </Box>
      </Box>
   <ImageGallery/>
  <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr 1fr',lg:'1fr 1fr 1fr'}} justifyContent={'center'} alignItems={'center'} gap={'10px'}>
      <GridItem justifyContent={'center'} alignItems={'center'}  marginTop={'15px'} >
         <Image src='./seeds.png' alt="seed image " margin={'auto'}/>
      <Text  as={'h1'} fontSize={{base:'3xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'}>Bhagya KDM 01 Seeds</Text>
      <Text as={'h3'} fontSize={{base:'xl',md:'md',lg:'xl'}}> Purchase Bhagya KDM 01 Seeds Drumstick from Reddy Agric farmers for your agricultural needs. Our high-quality seeds ensure healthy and productive drumstick crops. Order now and experience the excellence of Reddy Agric farmers</Text>
     <Link to="/products">
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
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
      </GridItem>
      <GridItem>
          <Grid gridTemplateRows={{base:'100%',md:'80% 20%',lg:'80% 20%'}} justifyContent={'center'} alignItems={'center'} gap={5}>
          <GridItem marginTop={'10px'}> <Image src='./seeds.png' alt="seed image " margin={'auto'}/>
          <Text  as={'h1'} fontSize={{base:'3xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'}>PKM Drumstick Seeds</Text>
      <Text as={'h3'} fontSize={{base:'xl',md:'md',lg:'xl'}} >  PKM  Drumstick seeds from Reddy Agric farmers. Our premium quality seeds guarantee robust and fruitful drumstick plants. Shop now and witness the expertise of Reddy Agric farmers</Text>
      <Link to="/pkmseeds">
    
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
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

</GridItem>
          <GridItem display={{base:'none',md:'block',lg:'block'}}>  <Image src='./moringaleaf.webp' alt="seed image " width={'200px'} margin={'auto'}/></GridItem>
          </Grid>
      </GridItem >
      <GridItem justifyContent={'center'} alignItems={'center'}  marginTop={'15px'} >  <Image src='./seeds.png' alt="seed image " margin={'auto'}/>
      <Text  as={'h1'} fontSize={{base:'3xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'}>ODC 3 Drumstick Seeds</Text>
      <Text as={'h3'} fontSize={{base:'xl',md:'md',lg:'xl'}}> Discover the excellence of ODC 3 Drumstick Seeds from Reddy Agric farmers. Our superior quality seeds ensure thriving drumstick plants with abundant yields.</Text>
      <Link to="/odc3seeds">
      <Button
              as={'a'}
              display={{ base: 'inline-flex', md: 'inline-flex' }}
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
        <Text fontSize="24px" fontWeight={'bold'}>High-Quality Seeds</Text>
        <Text fontsize={'16px'}>We offer a diverse range of seeds, including rare and heirloom varieties.</Text>
     
      </Flex>
    </Box></GridItem>

        </Grid>
        <Box padding={'10px'} >
    <Grid templateColumns={{base:'1fr',lg:'1fr 1fr'}} justifyContent={'center'} alignItems={'center'}>
           <GridItem>
            <Image src="./contact.webp" alt="contactus image" display={{base:'none',md:'block',lg:'block'}} />
           </GridItem>
           <GridItem>
           <Stack spacing={8} mx={'auto'}  py={5} px={2}  justifyContent={'center'} alignItems={'center'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'} fontWeight={'bold'} color={'#1fb125'}>
            Get in Touch
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          Our Representatives will reach you in few moments ✌️
          </Text>
        </Stack>
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
      </Stack>
           </GridItem>
        </Grid>
        </Box>
        <Footer/>
    </div>
  )
}

export default Home