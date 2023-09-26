import React, { useState } from 'react'
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BsFillTelephoneFill, BsWhatsapp}from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
import {AiOutlinePhone} from 'react-icons/ai'
import { Box, Flex, Grid, GridItem, Image,Text,Button, Spinner, useToast } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
const SingleProducttwo = () => {
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
    <Box width={{base:'95%',lg:'80%'}} margin={'auto'} >
  
      <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}}  marginTop={'80px'} paddingLeft={{base:'0px',lg:'25px'}}>
       <GridItem>
       <Box mt={4}>
      {selectedImage && (
        <Image src={selectedImage} alt="Selected Image" boxSize={{base:'80%',lg:"450px"}} width={{base:'100%',lg:'400px'}}marginLeft={{base:'0px',lg:'5px'}}  borderRadius={'10px'}  />
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
        
       <Text  as={'h1'} fontSize={{base:'3xl',md:'4xl',lg:'5xl'}}  fontWeight={'bold'} paddingLeft={'10px'}>Bhagya KDM 01 Seeds</Text>
     
       
     

      
        <Text marginTop={'-10px'} as={'h4'} fontSize={{base:'md',md:'2xl',lg:'2xl'}} fontWeight={'bold'} paddingLeft={'10px'} >seeds</Text>
     
       
      
        <Text as={'h2'} fontSize={{base:'xl',md:'3xl',lg:'3xl'}} fontWeight={'bold'} paddingLeft={'10px'}>₹100/1000g</Text>
        <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={{base:'xl',md:'2xl',lg:'2xl'}}> Purchase Bhagya KDM 01 Seeds Drumstick from Reddy Agric farmers for your agricultural needs. Our high-quality seeds ensure healthy and productive drumstick crops. Order now and experience the excellence of Reddy Agric farmers</Text>
       <Flex justifyContent={'space-between'}>
       <Box marginTop={'10px'} paddingLeft={'10px'}>
        <Flex justifyContent={'space-around'} gap={2} alignItems={'center'} >
        <a href="tel: 8123143554"> <Button bgColor={'blue.500'} height={'50px'} fontWeight={'bold'} color={'white'} gap={1} _hover={{bgColor:'blue'}} alignItems={'center'} marginLeft={'5px'}><AiOutlinePhone fontSize={'20px'}/> +919606318072</Button></a><a
            href="https://api.whatsapp.com/send?phone=918123811002&text=Hi%20I%20want%20Bhagya%20KDM%2001%20Seeds"
            target="_blank"
            rel="noreferrer"
          ><Button bgColor={'green.400'} height={'50px'} color={'white'} fontWeight={'bold'} gap={2} _hover={{bgColor:'green'}} ><BsWhatsapp fontSize={'20px'}/>9606318072</Button></a>
          </Flex>
        </Box>
       
        </Flex>
       </GridItem>
    </Grid>

    </Box>
    <Footer/>
  </Box>


  )
}

export default SingleProducttwo