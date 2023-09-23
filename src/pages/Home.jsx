import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Typewriter } from "react-simple-typewriter";
import '../App.css'
import ProductCard from '../components/ProductCard';
import ImageCard from '../components/ImageCard';
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
        <Text as={'h1'} fontSize={{base:'4xl',md:'5xl',lg:'5xl'}} fontWeight={'bold'}  marginBottom={'5px'}>Brands We sell</Text>
      <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr 1fr',lg:'1fr 1fr 1fr'}}  justifyContent={'center'} alignItems={'center'} gap={'10px'}>
           <GridItem>
           <ImageCard imageUrl="./brand1.webp" text="Brand1" href="/" />
           </GridItem>
           <GridItem>  <ImageCard imageUrl="./brand3.webp" text="Brand1" href="/" /></GridItem>
           <GridItem>  <ImageCard imageUrl="./brand2.webp" text="Brand1" href="/" /></GridItem>
      </Grid>
      </Box>
     <Grid gridTemplateColumns={'1fr'}>
       <GridItem>
           <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}}>
                <GridItem justifyContent={'center'} alignItems={'center'}  margin={'auto'}>
               <Image src="./brand2.webp" alt='brand2' width={'300px'}/>
                </GridItem>
                <GridItem padding={'10px'}>
                  <Text>
                    hello
                  </Text>
                   
                </GridItem>
           </Grid>
       </GridItem>
       <GridItem></GridItem>
       <GridItem></GridItem>
        
     </Grid>
    </div>
  )
}

export default Home