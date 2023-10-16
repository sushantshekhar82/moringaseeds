import React from 'react'
import '../App.css';
import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';

const About = () => {
  return (
    <Box marginTop={'10px'}>
    <Helmet>
  <meta charset="UTF-8"/>
<meta name="description" content="Reddy Agric where all best quality drumstick seeds or moringa seeds you get. Contactus:8123143554 whatsappus:8123811002 mailus:reddyagric@gmail.com"/>
<meta name="keywords" content="moringaseeds, drumstickseeds, reddyagric,moringaseeds contact, reddyagric moringaseeds, reddyagric durmstickseeds, reddyagric contact, reddyagric moringaseeds contact , reddyagric durmstickseeds contact,"/>
<title>Reddy Agric Moringa Seeds | Drumstick Seeds </title>
</Helmet>
        <Navbar/>
        <Box className='outerbox2' marginTop={'90px'}>
            <Text className='aboutus Brygada1918'>About Us...!</Text>
            <Text className='aboutdetail'>Welcome to Reddy Agric Products, your reliable source for high-quality Moringa Seeds and Drumstick Seeds. We are a farmer-owned organic seeds products company committed to delivering exceptional products that contribute to a healthier and more sustainable world.

At Reddy Agric, we pride ourselves on our ethical farming practices, ensuring that our seeds are grown using organic and environmentally friendly methods.

Our team of experienced farmers gives our plants the tender care they need to thrive without the use of hazardous pesticides or chemicals.

</Text>
<Text className='aboutdetail'>We recognise how crucial it is to give our customers the highest calibre seeds. We always work to uphold the highest standards in our cultivation procedures because of this. To assure their purity and viability, our moringa and drumstick seeds are hand-selected and put through a thorough quality inspection process.

</Text>
<Text className='aboutdetail'>We Provide 3 different types of seeds which have all types of potential to grow a healthy plants or crops 

They are : 

Bhagya KDM 01 Seeds Drumstick Seeds
PKM Seeds Drumstick Seeds
Odc seeds Drumstick Seeds

Contact us today to explore our range of organic seeds and start your journey towards a greener and more sustainable future.</Text>
        </Box>
  <Footer/>
   </Box>
 
  )
}

export default About