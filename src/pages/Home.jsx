import React from 'react'
import Navbar from '../components/Navbar'
import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Typewriter } from "react-simple-typewriter";
import '../App.css'
const Home = () => {

  return (
    <div>
        <Navbar/>
        <div id="home" className="intro">
      <Grid templateColumns={{base:'1fr',lg:'1fr 1fr'}}  justifyContent={'space-around'} alignItems={'center'} >
        <GridItem padding={'25px'}>
       <Text fontSize={{base:'6xl',lg:'6xl'}} fontWeight={'bold'}>
       Cultivate Success with Our High-Yield Moringa Seeds!
          </Text>
         <Text color={'#FFFF00'} fontSize={{base:'3xl',lg:'5xl'}} fontWeight={'bold'}>
            <span>
              {" "}
              <Typewriter
                words={[
                  "Moringa Seeds: Your Path to Profitable Gardening Ventures!",
                  "Start Your Moringa Garden Today with Our Premium Seeds!",
                  "From Seed to Superfood: Cultivate Moringa at Home!",
                  "Green Thumb's Delight: Moringa Seeds for Thriving Gardens!",
                  " Planting Profits: Moringa Seeds for a Lucrative Future!",
                ]}
                loop={500}
                cursor
                cursorStyle={"|"}
                typeSpeed={100}
                deleteSpeed={100}
              />
            </span>
            </Text>

         
        
        </GridItem>
        <GridItem  justifyContent={'center'} alignItems={'center'} height={'300px'}>
       .
        </GridItem>
      </Grid>
      </div>
  
    </div>
  )
}

export default Home