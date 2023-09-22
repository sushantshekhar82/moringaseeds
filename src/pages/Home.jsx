import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Typewriter } from "react-simple-typewriter";
import '../App.css'
const Home = () => {

  return (
    <div>
        <Navbar/>
        <div id="home" className="intro">
      <Grid templateColumns={{base:'1fr',lg:'1fr 1fr'}}  justifyContent={'space-around'} alignItems={'center'} >
        <GridItem padding={'25px'}>
       <Text fontSize={{base:'5xl',md:'7xl',lg:'7xl'}} fontWeight={'bold'} marginTop={{base:'250px',md:'',lg:'220px'}}>
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
  
    </div>
  )
}

export default Home