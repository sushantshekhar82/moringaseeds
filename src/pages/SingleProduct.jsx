import React, { useState } from 'react'
import {BsStar,BsStarFill,BsStarHalf} from 'react-icons/bs'
import {BiMessageDetail} from 'react-icons/bi'
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
       <GridItem>
        <Flex justifyContent={'space-between'}>
       <Text  as={'h1'} fontSize={{base:'4xl',lg:'5xl'}}  fontWeight={'bold'} paddingLeft={'10px'}>Brand1</Text>
     
       
     
     
       </Flex>
       <Flex justifyContent={'space-between'} alignItems={'center'}>
        <Text marginTop={'-10px'} as={'h4'} fontSize={'xl'} fontWeight={'bold'} paddingLeft={'10px'} >seed</Text>
       <Flex alignItems={'center'}> </Flex>
       </Flex>
       <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={'2xl'}>short description</Text>
        <Text as={'h2'} fontSize={'3xl'} fontWeight={'bold'} paddingLeft={'10px'}>₹100</Text>
        <Text as={'h2'} width={'90%'} paddingLeft={'10px'} fontSize={'2xl'}>longdescription</Text>
       <Flex justifyContent={'space-between'}>
        <Box marginTop={'10px'} paddingLeft={'10px'}><Button bgGradient="linear(to-r,red.400, red.300)"  _hover={
        {
         cursor:'pointer'
        }}  fontSize={'xl'}  color={'white'} fontWeight={'bold'} width={{base:'150px',lg:'200px'}} height={'50px'}  borderRadius={'10px'} >Add to Cart</Button></Box>
       
        </Flex>
       </GridItem>
    </Grid>
<Tabs variant='unstyled' paddingLeft={'30px'} marginTop={'30px'}>
<TabList>
  <Tab _selected={{ color: 'white', bg: '#5cac60' }} fontWeight={'bold'} width={{base:'150px',lg:'200px'}} borderRadius={'5px'}>Description</Tab>
  </TabList>
<TabPanels>
  <TabPanel>
   
  <Text as={'h2'} width={'90%'}  fontSize={'xl'}>long description</Text>
  </TabPanel>
 
</TabPanels>
</Tabs>
    </Box>
    <Footer/>
  </Box>


  )
}

export default SingleProduct