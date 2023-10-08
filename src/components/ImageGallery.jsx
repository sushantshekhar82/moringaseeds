import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './ImageGallery.css'; 
import GalleryCard from './GalleryCard';
const ImageGallery = () => {
  return (
    <Box>
        <Text as={'h1'}  color={'black'}
             
              fontSize={{base:'4xl',md:'5xl',lg:'5xl'}}
              fontWeight="bold">Our Gallery</Text>
        <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}} height={'500px'}borderRadius={'10px'} width={{base:'98%',md:'90%',lg:'80%'}} margin={'auto'} gap={2}>
            <GridItem borderRadius={'10px'}   overflow="hidden" >
            <GalleryCard imageUrl="./gallery4.jpg" height="500px" href="/" />
            </GridItem>
            <GridItem >
              <Grid gridTemplateRows={'50% 50%'} gap={1} >
                <GridItem borderRadius={'10px'}  overflow="hidden" >
                <GalleryCard imageUrl="./gallery5.webp" height="250px" href="/" />
                </GridItem>
                <GridItem>
                <Grid gridTemplateColumns={{base:'1fr 1fr',md:'1fr 1fr',lg:'1fr 1fr'}} gap={2}>
                       <GridItem borderRadius={'10px'} overflow="hidden" >
                       <GalleryCard imageUrl="./gallery2.webp" height="250px" href="/" />
                       </GridItem>
                       <GridItem borderRadius={'10px'} overflow="hidden" >
                       <GalleryCard imageUrl="./gallery1.webp" height="250px" href="/" />
                       </GridItem>
                </Grid>
                </GridItem>
              </Grid>

               
            </GridItem>
        </Grid>
        <Grid gridTemplateColumns={{base:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}} height={'500px'}borderRadius={'10px'} width={{base:'98%',md:'90%',lg:'80%'}} margin={'auto'} gap={2} marginTop={'10px'}>
           
            <GridItem  paddingTop={{base:'7px',md:'0px',lg:'0px'}}>
              <Grid gridTemplateRows={'50% 50%'} gap={1} >
                <GridItem borderRadius={'10px'}  overflow="hidden" >
                <GalleryCard imageUrl="./gallery22.webp" height="250px" href="/" />
                </GridItem>
                <GridItem>
                <Grid gridTemplateColumns={{base:'1fr 1fr',md:'1fr 1fr',lg:'1fr 1fr'}} gap={2}>
                       <GridItem borderRadius={'10px'} overflow="hidden"  >
                       <GalleryCard imageUrl="./gallery23.webp" height="250px" href="/" />
                       </GridItem>
                       <GridItem borderRadius={'10px'} overflow="hidden" >
                       <GalleryCard imageUrl="./gallery24.webp" height="250px" href="/" />
                       </GridItem>
                </Grid>
                </GridItem>
              </Grid>

               
            </GridItem>

            <GridItem borderRadius={'10px'}   overflow="hidden" >
            <GalleryCard imageUrl="./gallery21.webp" height="500px" href="/" />
            </GridItem>
        </Grid>
    </Box>
  )
}

export default ImageGallery